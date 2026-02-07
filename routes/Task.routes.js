import express from "express";
import {isAuth} from "../middlewares/auth.js";
import {
  createTask,
  alltask,
  taskUpdate,
  taskDetails,
  taskdelete
} from "../controllers/Task.controller.js   ";

const router = express.Router();

router.use(isAuth);

router.post("/", createTask);
router.get("/", alltask);
router.get("/:id", taskDetails);
router.patch("/:id", taskUpdate);
router.delete("/:id", taskdelete);

export default router;
