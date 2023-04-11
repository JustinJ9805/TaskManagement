import mongoose from "mongoose";

const finishedTasksSchema = new mongoose.Schema({
    taskId: String,
})

const openTasksSchema = new mongoose.Schema({
    taskId: String,
})

const ProjectSchema = new mongoose.Schema({
    projectId: Number,
    finishedTasks: [finishedTasksSchema],
    openTasks: [openTasksSchema],
    }, {timestamps:true}
);

const Project = mongoose.model('Project', ProjectSchema)

export default Project


