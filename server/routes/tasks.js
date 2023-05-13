import express from 'express'
import TasksController from '../controllers/tasks.js';
const router = express.Router()

router.get('/getTasksStatus', TasksController.getTaskStatus);





export default router;