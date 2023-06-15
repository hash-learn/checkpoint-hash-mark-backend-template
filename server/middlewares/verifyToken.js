import jwt from "jsonwebtoken";
import User from "../model/User.js";

const verifyToken = async (req, res, next) => {
    const token = req.cookies.userToken;
    if (!token) {
        res.status(404).send("go to login page");
    }
    try {
        const decode = jwt.verify(token, "mysecretkey");
        const user = await User.findById(decode.userID).select("-password");
        req.user = user;
        next();
    } catch (error) {
        console.log("error in verifyToken middleware: ", error);
        res.status(500).send("server side error")
    }
}
export { verifyToken };