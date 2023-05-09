import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const Employees = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/users/getUser')
          .then((response) => {
            //setData(response.data);
            setUsers(response.data);
            console.log(users)
          })
          .catch(error => {
            console.log(error);
          });
      }, [])

    return(
        <div> 
            <h3>Employees Page</h3>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <br></br>
                {users.map(user => (
                    <div className="employee-entry">
                        <div style={{
                            display: 'block',
                            opacity: '.7',
                            margin: '4px',
                            padding:'0px 0px 8px 8px',
                            border: 'double',
                            borderWidth: '2px',
                            borderColor: 'gold',
                            width: '400px'
                            
                            }}>
                            <h3>{user.name}</h3>
                            <h4>Role: {user.role}</h4> 
                            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <Button  style={{
                                    backgroundColor: 'steelblue',
                                    color: 'navy',
                                    border: 'solid',
                                    borderWidth: '2px',
                                    borderColor: 'navy',
                                }}>{user.email}</Button>

                                <Button style={{
                                    backgroundColor: 'steelblue',
                                    color: 'navy',
                                    border: 'solid',
                                    borderWidth: '2px',
                                    borderColor: 'navy',
                                }}>View</Button>

<Button style={{
                                    backgroundColor: 'steelblue',
                                    color: 'navy',
                                    border: 'solid',
                                    borderWidth: '2px',
                                    borderColor: 'navy',
                                }}>Delete Employee</Button>
                            </div>
                            
                        </div>        
                    </div>
                
                ))}
            
            </div>
        </div>
    )
}

export default Employees;