import express from "express";
import router from "./route/route.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", router);

app.listen(8000, () => console.log("Server Up!"));