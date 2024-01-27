import { models } from "../app.js";

const createUser = async (req, res) => {
    try {
        const user_model = models.user_model;
        let { phone_no, priority } = req.body;

        const newUser = await user_model.create({
            phone_no,
            priority
        });

        return res.status(200).send({
            message: "User created successfully",
            userId: newUser.id
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal Server Error"
        });
    }
};

export default createUser;
