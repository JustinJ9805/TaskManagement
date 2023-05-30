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
                    <FormLabel htmlFor="name">
                        <h3>Due date:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="name" />
                </div>
                <div>
                    <FormLabel htmlFor="name">
                        <h3>description:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="name" />
                </div>
                <div>
                    <FormLabel htmlFor="name">
                        <h3>User:</h3>
                    </FormLabel>
                    <TextField color="warning" required={true} id="name" />
                </div>

                <Button><h3>Create Project</h3></Button>
            </FormControl>



        </div>

    )
}

export default NewProject;