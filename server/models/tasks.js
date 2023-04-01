const mongoose = require ("mongoose")

const taskschema = mongoose.Schema({
    taskId: Number,
    projectId: Number,
    completed: Boolean,
    updates: {
        updateId: Number,
        note:String
        },
    }, {timestamps:true}
);

const task = mongoose.model('task', taskschema)

export default task;