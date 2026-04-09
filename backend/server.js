import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
  res.send({ message: "Backend working!" });
});

// Serve frontend static files directly (no build needed)
app.use(express.static(path.join(__dirname, "../frontend")));

// Your API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Catch-all: serve index.html for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));