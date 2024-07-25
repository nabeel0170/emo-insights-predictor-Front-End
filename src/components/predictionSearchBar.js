import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";


const PredictionSearchBar = () => {
  const [prediction, setPrediction] = useState("Type and press enter");
  const [text, setText] = useState(null);
  const apiUrl = process.env.API_URL;
console.log(apiUrl);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      predict();
    }
  };
    const predict = async () => {
      setPrediction("Predicting...");
      if(text) {
        try {
          const result = await fetch(
            "http:///localhost:8000/api/predict/predictText",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                text: text,
              }),
            }
          );
          const data = await result.json();
          setPrediction(data);
        } catch (error) {
          console.log(error);
          setPrediction("Sorry We Are Unable To Predict The Text");
        }
      } else {
        setPrediction("Type and press enter")
      }
    };

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
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>{prediction}</Box>
    </>
  );
};

export default PredictionSearchBar;
