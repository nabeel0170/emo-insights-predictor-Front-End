import Box from "@mui/material/Box";
import PredictionSearchBar from "../components/predictionSearchBar";
import ResultsHistory from "../components/resultsHistory";
import NavBar from "../components/navBar";
import AboutApp from "../components/aboutApp";

const Home = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <Box style={{ display: "flex", height: "100%" }}>
        <ResultsHistory />
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box style={{ width: "100%" }}>
            <PredictionSearchBar />
            <AboutApp />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
