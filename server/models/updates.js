import mongoose from "mongoose";

const UpdateSchema = mongoose.Schema({

    updateId: Number,
    taskId: Number,
    projectId: Number,
    note: String,
    userId: Number,
    }, {timestamps:true}
);

const Update = mongoose.model('Update', UpdateSchema)

export default Update;
