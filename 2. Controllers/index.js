import express from "express";
import employee from "./employee.js";

const app = express();

app.use("/employee", employee);

app.listen(8000, () => console.log("Server Up!"))