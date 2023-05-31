import React from "react";
import { FormControl, TextField, Button, FormLabel } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const NewProject = () => {
  const [projectName, setProjectName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/project/", {
        projectName,
        dueDate,
        description,
        user,
      });

      console.log("New project created:", response.data);

      // Clear form fields
      setProjectName("");
      setDueDate("");
      setDescription("");
      setUser("");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div>
      <FormControl>
        <div>
          <FormLabel htmlFor="projectName">
            <h3>Project Name:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="projectName" onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <div>
          <FormLabel htmlFor="dueDate">
            <h3>Due date:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="dueDate" onChange={(e) => setDueDate(e.target.value)}/>
        </div>
        <div>
          <FormLabel htmlFor="description">
            <h3>Description:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="description" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <FormLabel htmlFor="user">
            <h3>User:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="user" onChange={(e) => setUser(e.target.value)} />
        </div>

        <Button onClick={handleSubmit}>
          <h3>Create Project</h3>
        </Button>
      </FormControl>
    </div>
  );
};

export default NewProject;
