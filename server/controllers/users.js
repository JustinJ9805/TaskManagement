import User from "../models/users.js";

class UserController {

    static async getUser(req,res) {
        try{
            const users = await User.find({});
            res.send(users)
        } catch(err) {
            res.send(err)
        }
    }
}

export default UserController;