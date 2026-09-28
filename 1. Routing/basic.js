import express from "express";
// const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>HOME</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>ABOUT</h2>");
})

app.get("/contact", (req, res) => {
    res.send("<h2>CONTACT US</h2>");
})

app.listen(8000, ()=> console.log("Server Up!"))