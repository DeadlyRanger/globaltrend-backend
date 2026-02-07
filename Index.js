import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./configs/db.js";
import taskRoutes from "./routes/Task.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();



const allowedOrigins = [
  "http://localhost:5173",
  "https://global-trend-frontend.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.options("*", cors());

/* ====================== */

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const start = async () => {
  await dbConnect();

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
  });
};

start();
