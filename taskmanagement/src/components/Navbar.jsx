import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/picture.jpeg";
//import { InputBase, useTheme } from '@mui/material';
import {
  AppBar,
  IconButton,
  Toolbar,
  InputBase,
  useTheme,
} from "@mui/material";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  // ismessageModal,
  // setIsmessageModal,
  isSidemessageOpen,
  setIsSidemessageOpen,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleToggleSidemessage = () => {
    setIsSidemessageOpen(!isSidemessageOpen);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE*/}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5 rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton onClick={() => setIsSidemessageOpen(!isSidemessageOpen)}>
            <MessageOutlined />
          </IconButton>
          <IconButton >
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton onClick={() => setIsSidemessageOpen(!isSidemessageOpen)}>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
