import express from "express";
import createUser from "../controllers/createUser.js";
import getAllUserSubTasks from "../controllers/getAllUserSubTasks.js";

const userRouter = express.Router();

userRouter.post("/createUser",createUser);

userRouter.post("/getAllUserTasks",getAllUserTasks);

userRouter.post("/getAllUserSubTasks",getAllUserSubTasks);

export default userRouter;