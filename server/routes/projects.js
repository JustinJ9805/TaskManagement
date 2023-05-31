import express from "express";
import ProjectsController from "../controllers/projects.js";
import Projects from "../models/projects.js";
const router = express.Router();

router.get("/getProjectStatus", ProjectsController.getProjectStatus);

router.post("/", async (req, res) => {
  const { projectName, dueDate, description, user } = req.body;
  const projects = new Projects({
    projectName: projectName,
    completedTasks: '',
    openTasks: '',
    completed: 'New',
    dueDate: dueDate,
    description: description,
    user: user,
  });
  console.log("created post")
  await projects.save()
  .then((newproject) =>{
    res.status(201).json(newproject)
  })
});

export default router;

