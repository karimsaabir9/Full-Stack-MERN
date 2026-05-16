import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { limiter } from "./middlewares/rateLimiter.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger.js";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import uploadRoutes from "./routes/upload.js";
import taskRoutes from "./routes/tasks.js";

import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notfound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(limiter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// custom middlewares
app.use(logger);

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/tasks", taskRoutes);

// Server fronted in Production

// Server fronted in Production (Skip if on Vercel)
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    // Serve the frontend app
    app.get(/.*/, (req, res) => {
        res.send(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
    })
}

// marwalbo route hoostiisa dhig
app.use(notFound);
// errore handler marwalbo last ayaa ladhigaa
app.use(errorHandler);

//connect to mongodb
const dbURI =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_URI_DEV || process.env.MONGO_URI
    : process.env.MONGO_URI_PRO ||
      process.env.MONGO_URI ||
      process.env.MONGO_URI_DEV;

mongoose
  .connect(dbURI)
  .then(() =>
    console.log(
      `✅ MongoDB connected successfully to ${process.env.NODE_ENV === "development" ? "Local" : "Cloud"} DB`,
    ),
  )
  .catch((err) => console.error("❌ Connection error:", err));

// Export the app for Vercel
export default app;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
