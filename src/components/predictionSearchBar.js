import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PredictionSearchBar = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <TextField
          label="Type and press enter"
          sx={{ maxWidth: "600px" }}
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>Prediction</Box>
    </>
  );
};

export default PredictionSearchBar;
