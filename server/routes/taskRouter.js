import express from "express";
import createTask from "../controllers/createTask.js";
import updateTask from "../controllers/updateTask.js";
import deleteTask from "../controllers/deleteTask.js";

const taskRouter = express.Router();

taskRouter.post("/createTask",createTask);

taskRouter.put("/updateTask/:taskId", updateTask);

taskRouter.delete("/deleteTask/:taskId", deleteTask);

export default taskRouter;