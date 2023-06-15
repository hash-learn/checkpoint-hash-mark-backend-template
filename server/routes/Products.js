import express from "express";
import { getAllProducts, getProduct, getProductsByCategory, createProducts } from "../controllers/Products.js";

const router = express.Router();

// router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/products/:category", getProductsByCategory);
router.post('/', createProducts);


export default router;