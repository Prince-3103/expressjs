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

app.get("/all-cb", [cb1, cb2], (req, res, next) => {
    console.log("Third Callback");
    next();
}, (req, res) => {
    console.log("Fourth Callback");
    res.send("All Callbacks run");
})

app.listen(8000, () => console.log("Server Up"));