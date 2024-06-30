import Box from "@mui/material/Box";

const AboutApp = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          border: " 2px solid #dadce0",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center",
          width: "80%",
          minHeight: "400px",
          padding: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <h2>
            This web application harnesses the power of machine learning to
            predict the emotions conveyed in textual content. Whether it's
            discerning joy, sadness, or other sentiments, our model provides
            real-time analysis to help users understand the emotional context of
            their text.
          </h2>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <h4>Key Features:</h4>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              <li>
                <strong>Real-time Emotion Prediction:</strong> Instantly
                predicts emotions such as happiness, sadness, anger, and more
                based on the input text.
              </li>
              <li>
                <strong>User-friendly Interface:</strong> Designed for intuitive
                interaction, making it accessible for users to input text and
                receive emotional insights.
              </li>
              <li>
                <strong>Machine Learning Integration:</strong> Utilizes
                state-of-the-art natural language processing techniques to
                achieve accurate predictions.
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutApp;
