import express from "express";

const app = express();

app.get("/products/iphone/:model", (req, res) => {
    res.send(`Iphone ${req.params.model} pro max`);
})

app.get("/products/:category/:id", (req, res) => {
    const { category, id } = req.params;
    res.send(`Product category (${category}) & Product ID ${id}`);
})

app.param("/id", (req, res, next, id) => {
    console.log(`id: ${id}`);
    next();
})
app.get("/user/:id", (req, res) => {
    console.log("This is user id path");
    res.send("Response OK");
})

app.listen(8000, () => console.log("Server up!"))