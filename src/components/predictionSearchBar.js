import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PredictionSearchBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",

        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <TextField
        label="Type and press enter"
        style={{ maxWidth: "550px", width: "450px", margin: "30px" }}
      />
    </Box>
  );
};

export default PredictionSearchBar;
