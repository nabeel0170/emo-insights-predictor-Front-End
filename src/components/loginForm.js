import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const LoginForm = ({
  onSubmit,
  email,
  password,
}) => {
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
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              style={{ width: '300px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              style={{ width: '300px'}}
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
