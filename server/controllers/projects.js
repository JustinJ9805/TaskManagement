import Projects from '../models/projects.js'

class ProjectsController {

    static async getProjectStatus(req,res) {
        try{
            const projects = await Projects.find({});
            res.send(projects)
        } catch(err) {
            res.send(err)
        }
    }
}

export default ProjectsController;