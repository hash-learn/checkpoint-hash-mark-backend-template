import express from "express";
import { getUserDetails, DeleteFavouritesOfUser, AddFavouritesOfUser, getFavouritesOfUser, DeleteProductFromCart, AddProductToCart, getCartDetailsOfUser } from "../controllers/User.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/user/:id", verifyToken, getUserDetails)
router.get("/user/:id/cart", verifyToken, getCartDetailsOfUser)
router.get("/user/:id/favorites", verifyToken, getFavouritesOfUser)

router.post("/user/:id/cart", verifyToken, AddProductToCart)
router.post("/user/:id/favorites", verifyToken, AddFavouritesOfUser)

router.put("/user/:id/cart", verifyToken, DeleteProductFromCart)
router.put("/user/:id/favorites", verifyToken, DeleteFavouritesOfUser)






export default router;