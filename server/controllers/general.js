import User from "../models/users";
import Project from "../models/projects";



const getUser = async(req,res) => {
    try{

    }catch (error) {
        res.status(404).json({message: error.message})
    }
}

const getProject = async(req,res) => {
    try {
        
    }catch (error){
        res.status(404).json({message: error.message})
    }
}