// import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route,Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout" ;
import Dashboard from "scenes/dashboard";
import Employees from 'scenes/Employees';
import Projects from 'scenes/Projects';
import NewEmployee from "scenes/newEmployee";
import NewProject from "scenes/newProject";
import login from "scenes/login/";

function App() {
  
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return(
  <div className="App">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element = {<Layout />}>
            <Route path="/" element = {<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element= {<Dashboard/>} />
            <Route path="/employee" element={<Employees/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/newemployee" element={<NewEmployee/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
