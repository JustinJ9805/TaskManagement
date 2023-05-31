import React, { useState, useEffect } from "react";
import { FormControl, TextField, Button, FormLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";

const NewUpdate = () => {
  const [updateName, setUpdateName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [name,setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/tasks/getTasksStatus")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/project/getProjectStatus")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/updates", {
        updateName,
        taskName,
        projectName,
        note,
        name
      });
      console.log("new Update created");
      setUpdateName("");
      setTaskName("");
      setProjectName("");
      setNote("");
      setSubmitted(true);
      setName("");
    } catch (error) {
      console.error("Error creating update:", error);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  const filteredTasks = tasks.filter((task) => task.projectName === projectName);

  return (
    <div>
      {submitted ? (
        <div>
          <p>Submitted</p>
          <Button onClick={handleReset}>
            <h3>Create New Task</h3>
          </Button>
        </div>
      ) : (
        <FormControl>
          <div>
            <Select
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            >
              {projects.map((project) => (
                <MenuItem key={project.id} value={project.projectName}>
                  {project.projectName}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            >
              {filteredTasks.map((task) => (
                <MenuItem key={task.id} value={task.taskName}>
                  {task.taskName}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <FormLabel htmlFor="updateName">
              <h3>Update Name:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="updateName"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>

          <div>
            <FormLabel htmlFor="note">
              <h3>Note:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div>
            <FormLabel htmlFor="name">
              <h3>Name:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>




          <Button type="submit" onClick={handleSubmit}>
            <h3>Create update</h3>
          </Button>
        </FormControl>
      )}
    </div>
  );
};

export default NewUpdate;
