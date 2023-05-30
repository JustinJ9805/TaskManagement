import React, { useState, useEffect } from "react";
import { Box, Modal, IconButton, Typography, useTheme } from "@mui/material";
import { Send as SendIcon, PermContactCalendarOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const TextItems = [
  {
    text: "Contact",
    //link: "Employee",
    icon: <PermContactCalendarOutlined/>,
  },
];

const Sidemessage = ({
  drawerWidth,
  isSidemessageOpen,
  setIsSidemessageOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <Box component="nav">
      {isSidemessageOpen && (
        <Modal
          open={isSidemessageOpen}
          onClose={() => setIsSidemessageOpen(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width={drawerWidth}
            sx={{
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              borderWidth: isNonMobile ? 0 : "2px",
            }}
          >
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Message Board
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidemessageOpen(!isSidemessageOpen)}
                  />
                )}
              </FlexBetween>
            </Box>
            <Box p="1rem">
              {messages.map((message, index) => (
                <Typography key={index} variant="body1">
                  {message}
                </Typography>
              ))}
            </Box>
            <Box p="1rem">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <IconButton onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Sidemessage;
