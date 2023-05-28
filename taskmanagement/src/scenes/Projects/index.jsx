import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [updates, setUpdates] = useState([]);

  const [tasks, setTasks] = useState([]);

  const [selectedProject, setSelectedProject] = useState([]);

  const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/project/getProjectStatus")
      .then((response) => {
        setProjects(response.data);
        console.log(projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/updates/getUpdateStatus")
      .then((response) => {
        setUpdates(response.data);
        console.log(updates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/tasks/getTasksStatus")
      .then((response) => {
        setTasks(response.data);
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const moreInfo = (props) => {
    setSelectedProject(props);
    setSelectedTask("");

  };

  const showTasks = () => {
    return (
      <div>
        {tasks
          .filter(task => task.projectName === selectedProject)
          .map(task => (
            <Box
              key={task.id}
              sx={{
                display: 'inline-block',
                borderColor: "rgb(255,227,163)",
                borderWidth: "2px",
                borderStyle: "solid",
                margin: "0px 8px",
                width: '250px',
                textAlign: 'center'
              }}
            >
              <Button onClick={() => taskMoreInfo(task.taskName)}>
                <Box>
                  <h3>{task.taskName}</h3>
                  <h4>Due Date: {new Date(task.dueDate).toLocaleDateString()}</h4>
                  <h4>Status: {task.completed ? 'Completed':'Open'}</h4>
                  <h4>Description:{task.description}</h4>
                </Box>
              </Button>
  
              {selectedTask === task.taskName && showUpdates(task)}
            </Box>
          ))}
          
      </div>
    );
  };
  

  const taskMoreInfo = (props) => {
    setSelectedTask(props);
  };

  const showUpdates = (task) => {
    return (
      updates
        .filter(update => update.taskName === task.taskName && update.projectName === selectedProject)
        .map(update => (
          <Box
            key={update.id}
            sx={{
              textAlign: 'center',
            
            }}
          >
            <Button>
              <Box sx={{}}>
                <h3>{update.updateName}</h3>
                <h4>{update.note}</h4>
                <h4>~ {update.name}</h4>
              </Box>
            </Button>
          </Box>
        ))
    );
  };


  const filteredTasks = tasks.filter(
    (task) => task.projectName === selectedProject
  );
  console.log(filteredTasks);








  return projects.map((project) => {
    return (
      <Box sx={{display: 'flex'}}>
        <Button onClick={() => moreInfo(project.projectName)}>
          <Box
            sx={{
              borderColor: "rgb(255,227,163)",
              borderWidth: "2px",
              borderStyle: "solid",
              margin: "0px 8px",
              padding: "4px",
              width: '500px'
            }}
          >
            <h3>Project: {project.projectName}</h3>
            <h4>Due Date: {new Date(project.dueDate).toLocaleDateString()}</h4>
            <h4>Status: {project.completed}</h4>
            <h4>Description: {project.description}</h4>
            <h5>Assigned: {project.user}</h5>
          </Box>
        </Button>

        {selectedProject === project.projectName && showTasks(project)}

      </Box>
    );
  });
};

export default Projects;













