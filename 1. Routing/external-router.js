import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

app.use("/student", students);
app.use("/teacher", teachers);

app.listen(8000, () => console.log("Server up!"))