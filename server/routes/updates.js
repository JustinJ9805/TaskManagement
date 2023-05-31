import express from "express";
import UpdatesController from "../controllers/updates.js";
import Updates from "../models/updates.js";
const router = express.Router();

router.get("/getUpdateStatus", UpdatesController.getUpdateStatus);

router.post("/", async (req, res) => {
  const { updateName, taskName, projectName, note, name } = req.body;
  const updates = new Updates({
    updateName: updateName,
    taskName: taskName,
    projectName: projectName,
    note: note,
    name: name,
  });
  console.log("created update");
  await updates.save().then((newupdate) => {
    res.status(201).json(newupdate);
  });
});

export default router;
