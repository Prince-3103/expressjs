import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./route.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(8000, () => console.log("Server Up!"));