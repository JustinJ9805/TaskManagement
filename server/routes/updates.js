import express from 'express'
const router = express.Router();
import Updates from '../models/updates.js'

router.get('/', (req,res) => {
    res.send({data: 'go one level deeper for endpoints'})
})

router.get('/userUpdating', async(req,res) => {

    console.log('request received')
    try{
        const update = await Updates.find();
        //console.log(users);
        const userId = update.map(updates => updates.userId).join(' ');
        const taskId = update.map(updates => updates.taskId).join(' ');
        const projectId = update.map(updates => updates.projectId).join(' ');
        const updateId = update.map(updates => updates.updateId). join(' ');
        //const note = update.map(updates => updates.note).join (' ')
        res.send({userId, taskId, projectId, updateId});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


export default router;