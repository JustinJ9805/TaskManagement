import mongoose from "mongoose";

const UpdateSchema = mongoose.Schema({

    updateName: String,
    taskName: String,
    projectName: String,
    note: String,
    name: String,
    }, {timestamps:true}
);

const Update = mongoose.model('Update', UpdateSchema)

export default Update;
