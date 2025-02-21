const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is up and running!");
});

// ✅ GET Request API
app.get("/bfhl", (req, res) => {
    res.json({ "operation_code": 1 });
});

// ✅ POST Request API
app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: "shivani_ddmmyyyy",
        email: "shivani@xyz.com",
        roll_number: "2237015",
        numbers,
        alphabets,
        highest_alphabet
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});
