import express from 'express'
import TasksController from '../controllers/tasks.js';
import Tasks from '../models/tasks.js'

const router = express.Router()

router.get('/getTasksStatus', TasksController.getTaskStatus);

router.post("/", async (req, res) => {
    const {taskName, projectName, dueDate, description} = req.body;
    const tasks = new Tasks({
      taskName: taskName,
      projectName: projectName,
      completed: false,
      dueDate: dueDate,
      update: '',
      description: description
    });
    console.log("created post")
    await tasks.save()
    .then((newtask) =>{
      res.status(201).json(newtask)
    })
  });




export default router;