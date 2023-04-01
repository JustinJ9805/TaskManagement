const mongoose = require ("mongoose")

const updateschema = mongoose.Schema({

    updateId: Number,
    taskId: Number,
    projectId: Number,
    note: String,
    userId: Number,
    }, {timestamps:true}
);

const update = mongoose.model('update', updateschema)

export default update;
