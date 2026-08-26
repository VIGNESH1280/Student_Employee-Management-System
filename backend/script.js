import express from "express";
import dns from "dns";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./controllers/user.routes.js";
import logger from "./middleware/logger.middleware.js";

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(logger);
app.use("/users", userRoutes);






mongoose
  .connect(process.env.cloudDbUrl)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running successfully on port ${process.env.PORT}`);
});
