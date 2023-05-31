import React from "react";
import { FormControl, TextField, Button, FormLabel } from "@mui/material";


const NewProject = () => {

    return (
        <div>
            <FormControl>
                <div>
                    <FormLabel htmlFor="projectName">
                        <h3>Project Name:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="projectName" />
                </div>
                <div>
                    <FormLabel htmlFor="dueDate">
                        <h3>Due date:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="dueDate" />
                </div>
                <div>
                    <FormLabel htmlFor="description">
                        <h3>Description:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="description" />
                </div>
                <div>
                    <FormLabel htmlFor="user">
                        <h3>User:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="user" />
                </div>

                <Button><h3>Create Project</h3></Button>
            </FormControl>



        </div>

    )
}

export default NewProject;