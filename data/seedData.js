import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import users from "./users.js";
import products from "./products.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        // 1. Delete all existing data in the database
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // 2. Upload seed users into the database
        const seedUsers = await User.insertMany(users);
        // 2a. Get a ref to the admin user
        const adminUser = seedUsers[0]._id;

        // 3. Upload seed products into the database
        // 3a. By adding the admin user that created this product to each product's schema
        const seedProducts = products.map((product) => {
            return {
                ...product,
                user: adminUser,
            };
        });

        await Product.insertMany(seedProducts);
        console.log("SEED DATA UPLOAD TO SERVER SUCCESSFULL".bgGreen);
        process.exit();
    } catch (error) {
        console.error(error.bgRed.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        // Delete all existing data in the database
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("DATA SUCCESSFULLY DESTROYED FROM SERVER".bgGreen);
        process.exit();
    } catch (error) {
        console.error(error.bgRed);
        process.exit(1);
    }
};

if (process.argv[2] === "destroy") {
    destroyData();
} else if (process.argv[2] === "import") {
    importData();
} else {
    console.log("Please specify if you want to insert or destroy data");
}
