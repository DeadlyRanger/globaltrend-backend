import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./configs/db.js";
import taskRoutes from "./routes/Task.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();





app.use(
  cors({
    origin: "*",
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
