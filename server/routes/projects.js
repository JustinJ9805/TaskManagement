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
router.delete("/projects/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    // Perform any necessary validation or checks here

    // Assuming you are using Mongoose, you can delete the project using the following code:
    await Projects.findByIdAndDelete(projectId);

    res.sendStatus(204); // Send a success response with status code 204 (No Content)
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Send an error response with status code 500 (Internal Server Error)
  }
});

router.put("/projects/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const { projectName, dueDate, description, user } = req.body;

    // Perform any necessary validation or checks here

    // Assuming you are using Mongoose, you can update the project using the following code:
    const updatedProject = await Projects.findByIdAndUpdate(
      projectId,
      {
        projectName: projectName,
        dueDate: dueDate,
        description: description,
        user: user,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Send an error response with status code 500 (Internal Server Error)
  }
});

export default router;

