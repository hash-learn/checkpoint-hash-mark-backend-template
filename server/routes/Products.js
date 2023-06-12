import express from "express";
import { getAllProducts, getProduct, getProductsByCatogery } from "../controllers/Products.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.get("/products/:category", getProductsByCatogery);



export default router;