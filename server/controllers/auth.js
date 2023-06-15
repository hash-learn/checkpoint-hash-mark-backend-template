import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export async function handlesignin(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send("user not found");
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            res.status(404).send("incorrect password");
        }

        if (user && checkPassword) {
            const token = jwt.sign({ userId: user._id }, "mysecretkey",
                { expiresIn: "7d" });
            res.status(200).cookie("userToken", token, {
                httpOnly: true,
                secure: "false",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60,
            });
            res.send(token)

        }

    } catch (error) {
        console.log("error in handlesignin controller", error);
        res.send(500).send("server side error");
    }
}
export async function handlesignup(req, res, next) {
    try {
        const { name, email, password } = req.body;

        if (!(name && email && password)) {
            res.status(400).send("Insufficient Information");
        }

        const salt = await bcrypt.genSalt(10);
        const encryptPassword = await bcrypt.hash(password, salt);


        const newUser = await User.create({
            name: name,
            email: email,
            password: encryptPassword,
        });

        //generating jwt
        const token = jwt.sign({ userId: newUser._id },
            "mysecretkey", {
            expiresIn: "7d",
        });

        res.status(200).cookie("userToken", token, {
            httpOnly: true,
            secure: "false",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60,
        });
        res.json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        });




    } catch (error) {
        console.log("errror on signUp controller", error);
        res.status(500).send("error on server side")
    }
}

export async function handlelogout(req, res, next) {
    try {
        res.cookie("userToken", "", {
            httpOnly: true,
            expiresIn: new Date(0),
        });
        res.status(200).send("user is logged out");
    } catch (error) {
        console.log("error in handlelogout controller", error);
        res.status(500).send("server side error");
    }
}