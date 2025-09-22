// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

// 🔥 Aktifkan CORS
app.use(cors());

// Middleware supaya bisa baca JSON body
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// Connect ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
