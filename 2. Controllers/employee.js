import express from "express";
import { allEmployee, newEmployee, updateEmployee, deleteEmployee } from "./employee-con.js";

const route = express.Router();

route.get("/all", allEmployee);
route.post("/create", newEmployee);
route.put("/update", updateEmployee);
route.delete("/remove", deleteEmployee);

export default route;