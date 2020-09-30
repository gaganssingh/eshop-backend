require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
