import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await fetch(
        "http:///192.168.1.3:8000/api/users/loginUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const result = await loginResponse.json();
      const token = result.token;
      const expires = new Date(new Date().getTime() + 30 * 1000); // 30 seconds from now
      Cookies.set("token", token, {
        expires: expires,
        secure: true,
      });
      switch (true) {
        case result.success:
          navigate("/home");
          break;

        case result.message === "User not found":
          setLoginEmailError(result.message);
          setLoginPasswordError(""); // Clear password error
          break;

        default:
          setLoginPasswordError(result.message);
          setLoginEmailError(""); // Clear email error
          break;
      }
    } catch (error) {
      console.error("Failed to login user:", error);
      return { success: false, message: "Failed to send data" };
    }
  };

  return (
    <Box
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <h1>Login</h1>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <form onSubmit={loginUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ maxWidth: "300px" }}
                error={Boolean(loginEmailError)}
                helperText={loginEmailError || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                style={{ maxWidth: "300px" }}
                error={Boolean(loginPasswordError)}
                helperText={loginPasswordError || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="outlined">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
