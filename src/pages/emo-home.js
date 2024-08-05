import Box from "@mui/material/Box";
import PredictionSearchBar from "../components/predictionSearchBar";
import AboutApp from "../components/aboutApp";
import NavBar from "../components/navBar";
import SideDrawer from "../components/sideDrawer"; // Ensure correct import
import { useState } from "react";


const Home = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <NavBar handleClick={toggleDrawer} />
      {/* <ResetPasswordModal/> */}
      <SideDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        handleClick={toggleDrawer}
      />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          transition: "margin-left 0.3s",
          marginLeft: open ? `300px` : 0,
          display: {
            xs: open ? "none" : "block",
            sm: open ? "block" : "block",
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <PredictionSearchBar />
          <AboutApp />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
