import Box from "@mui/material/Box";
import LogoutButton from "./logoutButton";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = ({handleClick}) => {
  return (
    <AppBar position="abosulte" sx={{ minWidth: "300px" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "none" } }} onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flex: 1 }} />
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
