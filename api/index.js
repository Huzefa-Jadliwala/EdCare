import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import dataRoutes from "./routes/data.route.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger.js";
dotenv.config();

mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("Connected to Mongo!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server Listening on Port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode,
  });
});
