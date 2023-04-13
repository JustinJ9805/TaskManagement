import mongoose from "mongoose";

const updateTaskSchema = mongoose.Schema({
    updateId: Number,
    note: String,
})

const TaskSchema = mongoose.Schema({
    taskId: Number,
    projectId: Number,
    completed: Boolean,
    updates: [updateTaskSchema]
    }, {timestamps:true}
);

const Task = mongoose.model('Task', TaskSchema)

export default Task;