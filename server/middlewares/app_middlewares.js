import express from "express";
import cors from "cors";
import routes from "../routes/router.js";

const app_middlewares = [
	express.json(),
	express.urlencoded({ extended: true }),
	cors(),
	...routes,
];

export default app_middlewares;
