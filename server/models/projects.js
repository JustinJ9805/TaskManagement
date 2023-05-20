import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema({
    projectName: String,
    completedTasks: String,
    openTasks: String,
    completed: String,
    }, {timestamps:true}
);

const Project = mongoose.model('Project', ProjectSchema)

export default Project


