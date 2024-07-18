import Box from "@mui/material/Box";
import LogoutButton from "./logoutButton";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const NavBar = ({ handleClick }) => {
const [userName,setUserName] = useState(null)

useEffect(() => {
  

  const token = Cookies.get("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const name = decodedToken.name;
      setUserName(name)
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  } else {
    console.log("No token found");
  }
})

  return (
    <AppBar
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton
          aria-label="menu"
          onClick={handleClick}
          sx={{ backgroundColor: "purple", marginLeft: "-15px" }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flex: 1 }} />
        <LogoutButton userName={userName}/>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
