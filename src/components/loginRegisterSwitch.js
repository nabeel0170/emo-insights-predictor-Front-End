import Button from "@mui/material/Button";

const SignUpLoginSwitch = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <div style={{ maxWidth: "150px",width: "150px", textAlign: "center" }}>
        <Button type="submit" onClick={onLoginClick} style={{}}>
          Login
        </Button>
      </div>
      <div style={{ maxWidth: "150px",width: "150px", textAlign: "center" }}>
        <Button type="submit" onClick={onRegisterClick} style={{}}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default SignUpLoginSwitch;
