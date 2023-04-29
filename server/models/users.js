import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_id: Number,
    role: {
        type:String,
        enum: ['User', 'Admin', 'SuperAdmin'],
    }
});

const User = mongoose.model('User', UserSchema)

export default User;