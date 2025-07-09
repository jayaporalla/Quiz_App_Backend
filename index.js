require('dotenv').config();

const express = require('express');
const app = express();

// Use the dynamic PORT Railway provides or fallback to 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`🚀 Hello! Welcome to the server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`✅ Server Started on port ${PORT}...`);
});
