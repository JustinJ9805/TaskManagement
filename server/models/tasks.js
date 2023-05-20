import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    taskName: String,
    projectName: String,
    completed: Boolean,
    dueDate: Date,
    update: String,
    description: String,
    }, {timestamps:true}
);

const Task = mongoose.model('Task', TaskSchema)

export default Task;