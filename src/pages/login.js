import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import RegisterForm from "../components/registerForm";
import SignUpLoginSwitch from "../components/loginRegisterSwitch";
import LoginForm from "../components/loginForm";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoginClick = () => {
    setLoading(true);
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setName("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      setLoading(false);
    }, 250); 
  };

  const handleRegisterClick = () => {
    setLoading(true);
    setShowRegisterForm(true);
    setShowLoginForm(false);
    setName("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      setLoading(false);
    }, 250);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0",
        width:"100%"
      }}
    >
      <Box
        style={{
          border: "1px solid #dadce0",
          height: "500px",
          minWidth: "500px",
          maxWidth: "500px",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "row",
          margin:"20px",
          
        }}
      >  <Box style={{display:"flex",flexDirection:"column",minWidth: "500px",
      maxWidth: "500px",}}>
        <SignUpLoginSwitch
      onLoginClick={handleLoginClick}
      onRegisterClick={handleRegisterClick}
    />
   {loading ? (  
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",minWidth:"100%",flexDirection:"column",height:"100%"}}>
      <CircularProgress/>
    </Box> ) :
    showRegisterForm ? (
          <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
    ) : 
        (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
      </Box>
</Box>
    </Box>
  );
};

export default Login;
