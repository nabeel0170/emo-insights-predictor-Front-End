import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RegisterForm = ({ name, setName, email, setEmail, password, setPassword }) => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validateName = (value) => {
    const expression = /^[a-zA-Z\s]*$/;
    const numbersCheck = /\d/.test(value);

    if (!expression.test(value)) {
      setNameError("Name must contain only letters and spaces");
    } else if (numbersCheck) {
      setNameError("Name cannot contain numbers");
    } else {
      setNameError("");
    }
  };

  const checkPasswordStrength = (value) => {
    if (value.length > 8) {
      setPasswordStrength("Strong");
    } else if (value.length < 8) {
      setPasswordStrength("Weak");
    } else {
      setPasswordStrength("");
    }
  };

  const validateEmail = (value) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(value)) {
      setEmailError("Please enter a valid email address (e.g., example@example.com).");
    } else {
      setEmailError("");
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();
    console.log(name, email, password);
    try {
      const response = await fetch("http://localhost:8000/api/users/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      return { success: true, message: "Data sent to the API successfully" };
    } catch (error) {
      console.error("Failed to register user:", error);
      return { success: false, message: "Failed to send data" };
    }
  };

  return (
    <Box
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "fit-content",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box style={{ marginBottom: "20px" }}>
        <h1>Register</h1>
      </Box>
      <Box component="form" onSubmit={registerUser} sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              style={{ maxWidth: "300px" }}
              error={Boolean(nameError)}
              helperText={nameError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              style={{ maxWidth: "300px" }}
              error={Boolean(emailError)}
              helperText={emailError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              style={{ maxWidth: "300px" }}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
              helperText={passwordStrength}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" style={{ maxWidth: "300px" }}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegisterForm;
