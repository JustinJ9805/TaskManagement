import express from 'express'

import Task from '../models/tasks.js'


const router = express.Router();

router.get('/', (req,res) => {
    res.send({data: 'go one level deeper for endpoints'})
})

router.get('/completedTasks', async(req,res) => {

    console.log('request received')
    try{
        const completed = await Task.find();
        //console.log(users);
        const TaskId = completed.map(completed => completed.taskId);
        const completedTask = completed.map(completed => completed.completed)
        res.send({TaskId, completedTask});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


export default router;