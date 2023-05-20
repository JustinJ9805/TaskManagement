import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import {DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";




const Projects = () => {
    const [projects, setProjects] = useState([]);

    const [updates, setUpdates]= useState([]);

    const [tasks, setTasks] = useState([]);

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

    const [projectData, setProjectData] = useState(['New', 'In Progress', 'Completed', 'Delayed'])

    function handleDragEnd(event){

    }


    

    return(
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h3>Project Status</h3>
            <SortableContext items={projectData} strategy={verticalListSortingStrategy}>
                
            </SortableContext>
        </DndContext>
    )
    
}

export default Projects;