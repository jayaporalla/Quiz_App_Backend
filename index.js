const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`Hello! Welcome to the ${PORT} server`);
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started...");
})