import express from "express";
import { getUserDetails, DeleteFavouritesOfUser, AddFavouritesOfUser, getFavouritesOfUser, DeleteProductFromCart, AddProductToCart, getCartDetailsOfUser } from "../controllers/User.js";

const router = express.Router();

router.get("/user/:id", getUserDetails)
router.get("/user/:id/cart", getCartDetailsOfUser)
router.get("/user/:id/favorites", getFavouritesOfUser)

router.post("/user/:id/cart", AddProductToCart)
router.post("/user/:id/favorites", AddFavouritesOfUser)

router.delete("/user/:id/cart", DeleteProductFromCart)
router.delete("/user/:id/favorites", DeleteFavouritesOfUser)






export default router;