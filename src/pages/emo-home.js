import Box from "@mui/material/Box";
import PredictionSearchBar from "../components/predictionSearchBar";
import ResultsHistory from "../components/resultsHistory";
import NavBar from "../components/navBar";
import AboutApp from "../components/aboutApp";
import SideDrawer from '../components/sideDrawer'
import { Stack } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    if (open === false) {
      setOpen(true);
    } else if (open === true) {
      setOpen(false);
    }
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "100vh",overflow:'hidden' }}>
      <SideDrawer open={open} toggleDrawer={toggleDrawer} handleClick={toggleDrawer}/>
      <NavBar handleClick={toggleDrawer}/>
      <Stack direction="row" style={{ flexGrow: "1" ,maxHeight:'100%'}}>
        <ResultsHistory />
        <Stack direction="column" sx={{ flexGrow: "1" }}>
          <PredictionSearchBar />
          <AboutApp />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
