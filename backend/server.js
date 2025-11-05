// ==============================
// 📦 Dependencies
// ==============================
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// ==============================
// ⚙️ Configuration
// ==============================
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ==============================
// 🌐 MongoDB Connection
// ==============================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ==============================
// 🧱 Mongoose Schema & Model
// ==============================
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// ==============================
// 📬 API Routes
// ==============================

// POST → Save new contact message
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMsg = new Message({ name, email, message });
    await newMsg.save();

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// GET → Fetch all messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Portfolio backend is running and connected to MongoDB!");
});

// ==============================
// 🚀 Server Startup
// ==============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));



