import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./models/database.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
    await sequelize.sync();
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

/* // Root endpoint
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the Event Planner API!");
}); */

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
