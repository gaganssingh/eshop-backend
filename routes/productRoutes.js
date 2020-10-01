import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();

import Product from "../models/productModel.js";

// GET      /api/products
//          Public route
// prettier-ignore
router
    .route("/")
    .get(
        asyncHandler(async (req, res) => {
            const products = await Product.find({});
            res.json(products);
        })
    );

// GET      /api/products/:id
//          Public route
// prettier-ignore
router
    .route("/:id")
    .get(
        asyncHandler(async (req, res) => {
            const product = await Product.findById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404);
                throw new Error(`Product with id ${req.params.id} does not exist on the server.`);
            }
        })
    );

export default router;
