import React, { useState } from "react";
import { FormControl, TextField, Button, FormLabel } from "@mui/material";
import axios from "axios";

const NewProject = () => {
  const [projectName, setProjectName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/project/", {
        projectName,
        dueDate,
        description,
        user,
      });

      console.log("New project created");

      // Clear form fields and mark as submitted
      setProjectName("");
      setDueDate("");
      setDescription("");
      setUser("");
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
            <h3>Create New Project</h3>
          </Button>
        </div>
      ) : (
        <FormControl>
          <div>
            <FormLabel htmlFor="projectName">
              <h3>Project Name:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div>
            <FormLabel htmlFor="dueDate">
              <h3>Due date:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <FormLabel htmlFor="description">
              <h3>Description:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <FormLabel htmlFor="user">
              <h3>User:</h3>
            </FormLabel>
            <TextField
              color="warning"
              required={true}
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <Button type="submit" onClick={handleSubmit}>
            <h3>Create Project</h3>
          </Button>
        </FormControl>
      )}
    </div>
  );
};

export default NewProject;
