import express from "express";

const app = express();

const cb1 = (req, res, next) => {
    console.log("First Callback");
    next();
}
const cb2 = (req, res, next) => {
    console.log("Second Callback");
    next();
}
const cb3 = (req, res, next) => {
    console.log("Third Callback")
    res.send("Final Callback");
}

app.get("/array-cb", [cb1, cb2, cb3]);

app.listen(8000, () => console.log("Server Up!"));