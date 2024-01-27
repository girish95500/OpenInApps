import express from "express";
import createSubTask from "../controllers/createSubTask.js";
import updateSubTask from "../controllers/updateSubTask.js";
import deleteSubTask from "../controllers/deleteSubTask.js";

const subTaskRouter = express.Router();

subTaskRouter.post("/createSubTask",createSubTask);

subTaskRouter.put("/updateSubTask/:subTaskId", updateSubTask);

subTaskRouter.delete("/deleteSubTask/:subTaskId", deleteSubTask); 

export default subTaskRouter;