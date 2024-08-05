import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Settings } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { TextField } from "@mui/material";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #dadce0",
  borderRadius: "15px",
  boxShadow: 24,
  paddingTop: "70px",
  paddingBottom: "70px",
  alignItems: "center",
};

const textFieldStyle = {
  maxWidth: "250px",
  marginBottom: "10px",
};
const buttonStyle = {
  marginTop: "20px",
  width: "fit-content",
};

export default function ResetPasswordModal() {
  const [id, setId] = React.useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id;
        setId(id);
        console.log(id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.log("No token found");
    }
  }, []);

  const [open, setOpen] = React.useState(false);

  const [currentPassword, setCurrentPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [repeatPassword, setRepeatPassword] = React.useState(null);
  const [repeatPasswordText, setRepeatPasswordText] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const resetPassword = async (event) => {
    event.preventDefault();
    if (repeatPassword !== newPassword) {
      setRepeatPasswordText('New passwords arent matching!')
    } else {
      const verify = await fetch('http:///localhost:8000/api/users/resetPassword',{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      })
    }  
    
    
   
  }; 

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          color: "inherit",
          padding: "0",
        }}
      >
        <ListItemIcon sx={{}}>
          <Settings fontSize="small" />
        </ListItemIcon>
        Reset Password
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form autoComplete="off" onSubmit={resetPassword}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                padding: "75px",
                borderRadius: "15px",
                border: "2px solid #dadce0",
              }}
            >
              <TextField
                id="current-password-input"
                label="Current Password"
                type="password"
                autoComplete="off"
                variant="outlined"
                helperText=""
                onChange={(e) => setCurrentPassword(e.target.value)}
                sx={textFieldStyle}
                required
              />
              <TextField
                id="new-password-input"
                label="New Password"
                type="password"
                autoComplete="off"
                variant="outlined"
                onChange={(e) => setNewPassword(e.target.value)}
                sx={textFieldStyle}
                required
              />
              <TextField
                id="repeated-password-input"
                label="Repeat Password"
                type="password"
                autoComplete="off"
                onChange={(e) => setRepeatPassword(e.target.value)}
                variant="outlined"
                helperText={repeatPasswordText}
                sx={textFieldStyle}
                required
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="error"
                  sx={buttonStyle}
                  type="submit"
                >
                  Reset
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
