import express from "express";

const app = express();

// Messy Code
// app.get("/student", (req, res) => {
//     res.send("Student Dashboard");
// });
// app.post("/student", (req, res) => {
//     res.send("Add new student");
// });
// app.put("/student", (req, res) => {
//     res.send("Update Student");
// });
// app.delete("/student", (req, res) => {
//     res.send("Delete student");
// });

// Refactor
app
    .route("/student")
    .get((req, res) => res.send("All Student"))
    .post((req, res) => res.send("Add new student"))
    .put((req, res) => res.send("Update student"))
    .delete((req, res) => res.send("Delete student"));

app.listen(8000, () => console.log("Server up!"));