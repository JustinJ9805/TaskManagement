import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type:String,
        enum: ['User', 'Admin', 'SuperAdmin'],
    },
    position: String,
    department: String,
    phone: String
});

const User = mongoose.model('User', UserSchema)

export default User;