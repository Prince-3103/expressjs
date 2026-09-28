import express from "express";

const app = express();

// Regex Routes: Express allows regular expressions to be used as route paths for pattern matching.

app.get(/x/, (req, res) => {
    res.send("If the path inclued (x) it will work.");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
    res.send("It is 4 digit number")
})

app.listen(8000, () => console.log("Server Up!"))