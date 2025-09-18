import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
// Load environment variables from .env file

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin:
      process.env.NODE_ENV == "production"
        ? process.env.CORS_ORIGIN_PROD
        : "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
// Import and use all routes
import allRoutes from "./routes/index.js";
app.use("/api", allRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
