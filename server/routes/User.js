import express from "express";
import { getUserDetails, DeleteFavouritesOfUser, AddFavouritesOfUser, getFavouritesOfUser, DeleteProductFromCart, AddProductToCart, getCartDetailsOfUser } from "../controllers/User.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/:id", verifyToken, getUserDetails)
router.get("/:id/cart", verifyToken, getCartDetailsOfUser)
router.get("/:id/favorites", verifyToken, getFavouritesOfUser)

router.post("/:id/cart", verifyToken, AddProductToCart)
router.post("/:id/favorites", verifyToken, AddFavouritesOfUser)

router.put("/:id/cart", verifyToken, DeleteProductFromCart)
router.put("/:id/favorites", verifyToken, DeleteFavouritesOfUser)






export default router;