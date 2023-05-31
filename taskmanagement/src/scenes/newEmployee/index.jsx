import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";

const NewEmployee = () => {
  const SuperAdmin = "SuperAdmin";
  const Admin = "Admin";
  const User = "User";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(SuperAdmin);
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/users/", {
        name,
        email,
        password,
        role,
        department,
        position,
        phone,
      });
      console.log("New user created:");
      setName("");
      setEmail("");
      setPassword("");
      setRole(SuperAdmin);
      setDepartment("");
      setPosition("");
      setPhone("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

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
          <TextField
            color="warning"
            required={true}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <FormLabel htmlFor="email">
            <h3>Email:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <FormLabel htmlFor="password">
            <h3>Password:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormLabel htmlFor="confirm-password">
            <h3>Confirm Password</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="confirm-password"
          />
        </div>

        <div>
          <FormLabel htmlFor="role">
            <h3>Role:</h3>
          </FormLabel>
          <Select
            fullWidth
            value={role}
            label="role"
            onChange={handleRoleChange}
          >
            <MenuItem value={SuperAdmin}>SuperAdmin</MenuItem>
            <MenuItem value={Admin}>Admin</MenuItem>
            <MenuItem value={User}>User</MenuItem>
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="position">
            <h3>Position:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <FormLabel htmlFor="department">
            <h3>Department:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <FormLabel htmlFor="phone">
            <h3>Phone:</h3>
          </FormLabel>
          <TextField
            color="warning"
            required={true}
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <Button onClick={handleSubmit}>
          <h3>Create Employee</h3>
        </Button>
      </FormControl>
    </div>
  );
};

export default NewEmployee;
