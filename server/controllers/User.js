import User from "../model/User.js";
async function getUserDetails(req, res, next) {
    try {
        const user = findById(req.params.id);
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(400).send("invalid user detalis")
        }
    } catch (error) {
        next(error);
    }
}
async function getCartDetailsOfUser(req, res, next) {
    try {
        const user = req.params.id;
        if (!user) {
            return res.status(404).json({ messaage: "user not found" })
        }
        const userCart = 
    } catch (error) {
        next(error);
    }
}
async function AddProductToCart(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function DeleteProductFromCart(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function getFavouritesOfUser(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function AddFavouritesOfUser(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function DeleteFavouritesOfUser(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}

export { getUserDetails, DeleteFavouritesOfUser, AddFavouritesOfUser, getFavouritesOfUser, DeleteProductFromCart, AddProductToCart, getCartDetailsOfUser };