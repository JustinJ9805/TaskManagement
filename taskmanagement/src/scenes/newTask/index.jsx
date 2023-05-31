import React from 'react'
import { useState, useEffect } from "react";
import { FormControl, TextField, Button, FormLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";


const NewTask = () => {

  const [projects, setProjects] = useState([])
  const [projectName, setProjectName] = useState('')
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/tasks/", {
        projectName,
        taskName,
        dueDate
      });

      console.log("New task created");

      // Clear form fields and mark as submitted
      setProjectName("");
      setDueDate("");
      setTaskName("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <p>Submitted</p>
          <Button onClick={handleReset}>
            <h3>Create New Task</h3>
          </Button>
        </div>
      ): (
      <FormControl>
        <div>
        <Select value={projectName} onChange={(e) => setProjectName(e.target.value)}>
  {projects.map((project) => (
    <MenuItem key={project.id} value={project.projectName}>
      {project.projectName}
    </MenuItem>
  ))}
</Select>

        </div>

        <div>
          <FormLabel htmlFor="taskName">
            <h3>Task Name:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div>
          <FormLabel htmlFor="dueDate">
            <h3>Due Data:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <Button type="submit" onClick={handleSubmit}>
            <h3>Create Task</h3>
        </Button>
        
      </FormControl>
      )}
    </div>
  );
};

export default NewTask;
