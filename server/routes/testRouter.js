import express from "express";

const testRouter = express.Router();

testRouter.get("/test", (req,res) => {
    res.status(200).send({
        status: 200,
        message: "test routes working"
    });
});

export default testRouter;