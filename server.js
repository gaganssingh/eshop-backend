import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { unknownRoute, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config(); // INITIALIZE ENV VARIABLES
connectDB(); // INITIALIZE MongoDB CONNECTION
const app = express(); // INITIALIZING APP VARIABLE

// MIDDLEWARES
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev")); // Basic logger
}
app.use(cors()); // Allow CORS requests
app.use(express.json()); // Body parser

// MOUNT ROUTES
// Generic Route
app.get("/", (req, res) => res.json({ message: "Hello World!" }));

// Specific routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// ERROR HANDLER MIDDLEWARES
app.use(unknownRoute); // Unknown route handler
app.use(errorHandler); // Generic error handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
            .brightYellow.bold
    )
);
