import express from "express";
import products from "./product.js";

const app = express();

app.get("/products", (req, res) => {
    res.json(products);
})

app.listen(8000, () => console.log("Server up!"))