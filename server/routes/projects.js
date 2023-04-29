import express from 'express'
const router = express.Router();
import Project from '../models/projects.js'

router.get('/', (req,res) => {
    res.send({data: 'go one level deeper for endpoints'})
})

router.get('/projectId', async(req,res) => {

    console.log('request received')
    try{
        const project = await Project.find();
        //console.log(users);
        const projectId = project.map(project => project.projectId).join(' ::: ');
        res.send(projectId);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.get('/finTasks', async(req,res) => {

    console.log('request received')
    try{
        const project = await Project.find();
        //console.log(users);
        const finishedTasks = project.map(project => project.finishedTasks.map(finishedTasks => finishedTasks.taskId)).join(' ::: ');
        res.send(finishedTasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.get('/openTasks', async(req,res) => {

    console.log('request received')
    try{
        const project = await Project.find();
        //console.log(users);
        const openTasks = project.map(project => project.openTasks.map(openTasks => openTasks.taskId)).join(' ::: ');
        res.send(openTasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});







export default router;