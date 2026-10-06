import express from "express";
import userCredentials from "./log.js";

const app = express();

app.use(userCredentials);

app.get("/", (req, res) => {
    res.send("<h1>Hello The King in the North</h1>")
})

app.listen(8080, () => console.log("Server up!"))