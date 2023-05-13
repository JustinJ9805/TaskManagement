import Tasks from '../models/tasks.js'

class TasksController {

    static async getTaskStatus(req,res) {
        try{
            const tasks = await Tasks.find({});
            res.send(tasks)
        } catch(err) {
            res.send(err)
        }
    }
}

export default TasksController;