import mongoose from "mongoose";

const updateTaskSchema = mongoose.Schema({
    updateId: Number,
    note: String,
})

const TaskSchema = mongoose.Schema({
    taskName: String,
    projectName: String,
    completed: Boolean,
    dueDate: Date,
    update: String
    }, {timestamps:true}
);

const Task = mongoose.model('Task', TaskSchema)

export default Task;