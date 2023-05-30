import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./styles.css";

const Employees = () => {
  const theme = useTheme();
  const [users, setUsers] = useState([]);

  const columns = [
    {
      field: "name",
      headerName:"Name",
      flex: 1,
    },
    {
      field: "department",
      headerName:"Department",
      flex: 1,
    },
    {
      field: "position",
      headerName:"Position",
      flex: 1,
    },
    {
      field: "email",
      headerName:"Email",
      flex: 2,
    },
    {
      field: "phone",
      headerName:"Phone",
      flex: 2,
      renderCell: (params) =>{
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
      }
    },
  ]

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
    <Box
      mt="100px"
      height="100vh"
      sx={{
        "& .MuiDataGrid-root":{
          border:'none'
        },
        "& .MuiDataGrid-call":{
          borderBottom:'none'
        },
        "& .MuiDataGrid-columnHeader":{
          backgroundColor: theme.palette.background.alt,
          color:theme.palette.secondary[100],
          borderBottom:"none"
        },
        "& .MuiDataGrid-virtualScroller":{
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerontainer":{
          backgroundColor: theme.palette.primary.alt,
          color:theme.palette.secondary[100],
          borderBottom:'none'
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
          color: `${theme.palette.secondary[200]} !important`
        }
      }}
    >
      <DataGrid
        loading={setUsers || !users}
        getRowId={(row) => row._id}
        rows={users || []}
        columns={columns}
      />
    </Box>
  );
};

export default Employees;
