import User from "../model/User.js";
async function getUserDetails(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
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
        const { id } = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ messaage: "user not found" })
        }
        const userCart = user.cart_items;
        res.status(200).send(userCart);

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
        let user = await User.findById(req.params.id);


    } catch (error) {
        next(error);
    }
}
async function getFavouritesOfUser(req, res, next) {
    try {
        const { id } = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ messaage: "user not found" })
        }
        const userFavourites = user.favorites;
        res.status(200).send(userFavourites);

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