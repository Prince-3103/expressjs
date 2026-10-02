import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
    res.send("All Students");
})
router.post("/create", (req, res) => {
    res.send("Create New Student");
})
router.put("/change", (req, res) => {
    res.send("Update Student");
})
router.delete("/remove", (req, res) => {
    res.send("Remove Student from db.");
})

export default router;