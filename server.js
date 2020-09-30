require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const STORE = require("./data/STORE");

// INITIALIZING APP VARIABLE
const app = express();

// MIDDLEWARES
app.use(morgan("dev")); // Basic logger
app.use(cors());

// Generic Route
app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.get("/api/products", (req, res) => res.json(STORE));

app.get("/api/products/:id", (req, res) => {
    const product = STORE.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
    )
);
