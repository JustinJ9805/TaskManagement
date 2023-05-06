import Update from "../models/updates.js";

class UpdatesController {

    static async getUpdateStatus(req,res) {
        try{
            const updates = await Update.find({});
            res.send(updates)
        } catch(err) {
            res.send(err)
        }
    }
}

export default UpdatesController;