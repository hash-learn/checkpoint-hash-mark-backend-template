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
        let user = req.user;
        let updatedCart = [req.params.id, ...user.cart_items];
        user.cart_items = updatedCart;
        const updateUser = await user.save();
        if (updateUser)
            res.status(200).send(updateUser);
        else
            res.status(400).send("error from client side")
    } catch (error) {
        console.log(error);
        res.send("error from serverside").status(500);
        next(error);
    }
}
async function DeleteProductFromCart(req, res, next) {
    try {
        let user = req.user;
        let cart = user.cart_items;
        const index = cart.indexOf(req.params.id);
        if (index > -1) {
            cart.splice(index, 1);
        }
        else {
            res.send("couldn't find the element")
        }
        user.cart_items = cart;
        const updatedUser = await user.save();
        res.status(200).send(updatedUser);

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
        let user = req.user;
        let favor = user.favorites;
        user.favorites = [req.params.id, ...favor];
        await user.save();
        res.send(200).send(user);
    } catch (error) {
        next(error);
    }
}
async function DeleteFavouritesOfUser(req, res, next) {
    try {
        let user = req.user;
        let favor = user.favorites;
        const index = favor.indexOf(req.params.id);
        if (index > -1) {
            favor.splice(index, 1);
        }
        else {
            res.send("couldn't find the element")
        }
        user.favorites = favor;
        const updatedUser = await user.save();
        res.status(200).send(updatedUser);
    } catch (error) {
        next(error);
    }
}

export { getUserDetails, DeleteFavouritesOfUser, AddFavouritesOfUser, getFavouritesOfUser, DeleteProductFromCart, AddProductToCart, getCartDetailsOfUser };