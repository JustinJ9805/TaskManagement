const mongoose = require ("mongoose")

const projectschema = mongoose.Schema({
    projectId: Number,
    finishedTasks: {
        taskId: Number,
        },
    openTasks: {
        taskId: Number,
        },
    }, {timestamps:true}
);

const project = mongoose.model('project', projectschema)

export default project


