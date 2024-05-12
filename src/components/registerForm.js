import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  // State variable to hold name validation error
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
      setEmailError(
        "Please enter a valid email address (e.g., example@example.com)."
      );
    } else {
      setEmailError("");
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();
    console.log(name, email, password);
    try {
      const response = await fetch(
        "http://localhost:8000/api/users/registerUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      return { success: true, message: "Data sent to the API successfully" };
    } catch (error) {
      console.error("Failed to register user:", error);
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
        <h1>Register</h1>
      </div>
      <form onSubmit={registerUser}>
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
              error={Boolean(nameError)} // Set error prop based on nameError
              helperText={nameError} // Display validation error message
              style={{ width: "300px" }}
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
              error={Boolean(emailError)} // Set error prop based on nameError
              helperText={emailError} // Display validation error message
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
              helperText={passwordStrength}
              type="password"
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
