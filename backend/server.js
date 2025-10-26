const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = "./messages.json";

// POST contact form entries
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newEntry = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push(newEntry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.json({ success: true });
});

// GET all submitted messages
app.get("/api/messages", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
