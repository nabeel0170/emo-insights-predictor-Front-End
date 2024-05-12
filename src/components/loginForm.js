import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const LoginForm = ({ email, setEmail, password, setPassword }) => {
  const navigate = useNavigate();
  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await fetch(
        "http://localhost:8000/api/users/loginUser",
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
     console.log(result);
     if(result.success){
      console.log("redirecting");
      navigate('/home');
     } else {
      // If login fails, display an error message
      alert("Login failed. Please try again.");
    }
    } catch (error) {
      console.error("Failed to login user:", error);
      return { success: false, message: "Failed to send data" };
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={loginUser}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
