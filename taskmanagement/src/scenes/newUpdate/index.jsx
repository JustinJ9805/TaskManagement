import React from "react";
import { FormControl, TextField, Button, FormLabel } from "@mui/material";
import axios from "axios";

const NewUpdate = () => {
    return(
            <div>
          <h3>Create New update</h3>
    
          <FormControl>
            <div>
              <FormLabel htmlFor="taskName">
                <h3>Update Name:</h3>
              </FormLabel>
              <TextField
                color="warning"
                required={true}
                id="taskName"
                //value={taskName}
                //onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
    
            <div>
              <FormLabel htmlFor="description">
                <h3>Note:</h3>
              </FormLabel>
              <TextField
                color="warning"
                required={true}
                id="description"
                //value={description}
                //onChange={(e) => setDescrpition(e.target.value)}
              />
            </div>
            <div>
              <FormLabel htmlFor="dueDate">
                <h3>Due Date:</h3>
              </FormLabel>
              <TextField
                color="warning"
                required={true}
                id="dueDate"
                //value={dueDate}
                //onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            
            
          </FormControl>
        </div>
    )
}

export default NewUpdate;