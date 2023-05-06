import express from 'express'
import ProjectsController from '../controllers/projects.js';
const router = express.Router();

router.get('/getProjectStatus', ProjectsController.getProjectStatus);





export default router;