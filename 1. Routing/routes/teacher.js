import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
    res.send("All Teacher");
})
router.post("/create", (req, res) => {
    res.send("Create New Teacher");
})
router.put("/change", (req, res) => {
    res.send("Update Teacher");
})
router.delete("/remove", (req, res) => {
    res.send("Remove Teacher from db.");
})

export default router;