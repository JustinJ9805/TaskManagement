import express from "express";
import UserController from "../controllers/users.js";
import Users from "../models/users.js";
const router = express.Router();

router.get("/getUser", UserController.getUser);

router.post("/", async (req, res) => {
  const { name, email, password, role, position, department, phone } = req.body;
  const users = new Users({
    name: name,
    email: email,
    password: password,
    role: role,
    position: position,
    department: department,
    phone: phone,
  });
  console.log("created user");
  await users.save().then((newuser) => {
    res.status(201).json(newuser);
  });
});

export default router;
