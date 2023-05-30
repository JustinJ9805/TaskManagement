import React from "react";
import { FormControl, TextField, Button, FormLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const NewEmployee = () => {
  const SuperAdmin = "SuperAdmin";
  const Admin = "Admin";
  const User = "User";

  const [role, setRole] = useState(SuperAdmin);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>

      <h3>Create New Employee</h3>

      <FormControl>
        <div>
          <FormLabel htmlFor="name">
            <h3>Name:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="name" />
        </div>

        <div>
          <FormLabel htmlFor="email">
            <h3>Email:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="email" />
        </div>
        <div>
          <FormLabel htmlFor="password">
            <h3>Password:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="password" />

          <FormLabel htmlFor="confirm-password">
            <h3>Confirm Password</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="confirm-password" />
        </div>

        <div>
          <FormLabel htmlFor="role">
            <h3>Role:</h3>
          </FormLabel>
          <Select onChange={handleRoleChange} fullWidth value={role} label="role">
            <MenuItem value={SuperAdmin}>SuperAdmin</MenuItem>
            <MenuItem value={Admin}>Admin</MenuItem>
            <MenuItem value={User}>User</MenuItem>
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="position">
            <h3>Position:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="position" />
        </div>
        <div>
          <FormLabel htmlFor="department">
            <h3>Department:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="department" />
        </div>
        <div>
          <FormLabel htmlFor="phone">
            <h3>Phone:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="phone" />
        </div>

        <Button>
          <h3>Create Employee</h3>
        </Button>
      </FormControl>
      
    </div>
    
  );
};

export default NewEmployee;