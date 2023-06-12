import User from "../model/User.js";
import jwt from "jsonwebtoken";
export async function handlesignin(req, res, next) {
    try {

    } catch (error) {

    }
}
export async function handlesignup(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({
            name: name,
            email: email,
            password: password,
        });
        if (user) {
            //generating jwt
            const token = jwt.sign({ userId: user._id },
                "mysecretkey", {
                expiresIn: "7d",
            });

            res.cookie("userToken", token, {
                httpOnly: true,
                secure: "development",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60,
            });
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
            });

        }


    } catch (error) {
        console.log("errror on signUp controller", error);
    }
}

export async function handlelogout(req, res, next) {
    try {

    } catch (error) {

    }
}