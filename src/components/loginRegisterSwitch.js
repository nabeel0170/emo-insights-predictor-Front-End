import Button from "@mui/material/Button";

const SignUpLoginSwitch = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
        padding: 5,
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      <div style={{ width: "150px", textAlign: "center" }}>
        <Button type="submit" onClick={onLoginClick} style={{}}>
          Login
        </Button>
      </div>
      <div style={{ width: "150px", textAlign: "center" }}>
        <Button type="submit" onClick={onRegisterClick} style={{}}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default SignUpLoginSwitch;
