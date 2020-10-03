import express from "express";
const router = express.Router();

import {
    getProducts,
    getProductById,
} from "../controllers/productController.js";

// GET      /api/products
//          Public route
router.route("/").get(getProducts);

// GET      /api/products/:id
//          Public route
router.route("/:id").get(getProductById);

export default router;
