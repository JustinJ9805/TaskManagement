import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";


const Projects = () => {
    const [projects, setProjects] = useState([]);

    const [updates, setUpdates]= useState([]);

    const [tasks, setTasks] = useState([]);

    const [selectedProject, setSelectedProject] = useState([])

    const [selectedTask, setSelectedTask] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/project/getProjectStatus')
        .then((response) => {
        setProjects(response.data)
        console.log(projects)
        }).catch(error => {
        console.log(error)
        });
    }, [])

    useEffect(()=> {
        axios.get('http://localhost:5001/updates/getUpdateStatus')
        .then((response) => {
        setUpdates(response.data)
        console.log(updates);
        
        }).catch(error => {
        console.log(error)
        });
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5001/tasks/getTasksStatus')
        .then((response) => {
            setTasks(response.data)
            console.log(tasks);
        }).catch(error => {
            console.log(error)
        })
    })

    const moreInfo =  (props) => {
         setSelectedProject(props)
         setSelectedTask('')
    }

    const taskMoreInfo =(props) => {
        setSelectedTask(props)
    }

    const filteredTasks = tasks.filter(task => task.projectName === selectedProject )
    console.log(filteredTasks)
    return(
        <div>
              
            <h3>Projects Page</h3>
            <div>
                <ul>
                    {projects.map(project => {
                        return(
                            <div>
                                <ul>
                                    
                                    <Button onClick={() => moreInfo(project.projectName)} style={{color: 'gray'}}>
                                        <div>
                                            <h3>Project: {project.projectName}</h3>
                                            <h4>Due Date: {project.dueDate}</h4>
                                            <h4>Description: {project.description}</h4>
                                            <h5>Assign: {project.user}</h5>
                                        </div> 
                                    </Button>
                                    
                                    {selectedProject === project.projectName && (
                                        <div>
                                            {tasks
                                                .filter(task => task.projectName === selectedProject)
                                                .map(task => (
                                                    <div>
                                                        <ul>
                                                            <Button onClick={() => taskMoreInfo(task.taskName)} key={task.taskName}>
                                                                <div>
                                                                    <h3>{task.taskName}: {task.completed ? 'Complete' : 'Open'}</h3>
                                                                    <h4>Due Date:{task.dueDate}</h4>
                                                                    <h4>Description:{task.description}</h4>
                                                                </div>
                                                            </Button>
                                                            <ul>
                                                                {selectedTask === task.taskName && (
                                                                    <div>
                                                                        {updates
                                                                        .filter(update => update.projectName === selectedProject && update.taskName === selectedTask)
                                                                        .map(update => (
                                                                            <div>
                                                                                <Button key={update.updateName}>
                                                                                    <div>
                                                                                        <h3>{update.updateName}: {update.note}</h3>                                                
                                                                                        <h5>Posted:{update.name}</h5>
                                                                                    </div>
                                                                                    
                                                                                </Button>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    
                                    )}
                                </ul>
                            </div>
                        
                        )
                    })}
                </ul>
            </div>

            

        </div>
    )
    
}

export default Projects;