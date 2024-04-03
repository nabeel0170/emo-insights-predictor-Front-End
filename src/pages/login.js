import { useState } from "react";
import RegisterForm from "../components/registerForm";
import SignUpLoginSwitch from "../components/loginRegisterSwitch";
import LoginForm from "../components/loginForm";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const registerUser = async (event) => {
    event.preventDefault();
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
    const data = await response.json();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ border: "1px solid #dadce0",height:'500px' }}>
        <SignUpLoginSwitch
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />
        {showRegisterForm && ( 
          <RegisterForm
            onSubmit={registerUser}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
        {showLoginForm && <LoginForm email={email} setEmail={setEmail} password={password} />}
      
      </div>
    </div>
  );
};

export default Login;
