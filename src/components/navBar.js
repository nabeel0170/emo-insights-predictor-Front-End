import Box from "@mui/material/Box";
import LogoutButton from "./logoutButton";

const NavBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        justifyContent: "end",
        backgroundColor: " #f8f9fa",
        borderBottom: " 2px solid #dadce0",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <LogoutButton />
      </Box>
    </Box>
  );
};
export default NavBar;
