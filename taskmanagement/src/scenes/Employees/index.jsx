import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Typography, Button } from "@mui/material";
import "./styles.css";

const Employees = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/users/getUser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{}}>
      
      <table>
        <tr className="Header">
          <th className="tableHeader">Name</th>
          <th className="tableHeader">Role</th>
          <th className="tableHeader">Position</th>
          <th className="tableHeader">Department</th>
          <th className="tableHeader">Email</th>
          <th className="tableHeader">Phone</th>
        </tr>
        
        <tr className="Table">
          {users.map((user) => {
            return(
              <Box sx={{display:'flex', justifyContent: 'space-evenly'}}>
                <td className="tableEntry">{user.name}</td>
                <td className="tableEntry">{user.role}</td>
                <td className="tableEntry">{user.position}</td>
                <td className="tableEntry">{user.department}</td>
                <td className="tableEntry"><Button>{user.email}</Button></td>
                <td className="tableEntry"><Button>{user.phone}</Button></td>
              </Box>
            )
          })}
          
        </tr>
      </table>
    </Box>
  );
};

export default Employees;
