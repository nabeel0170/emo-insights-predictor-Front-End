
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const AboutApp = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow:'1',
        
      }}
    >
      <Box
        sx={{
          border: " 2px solid #dadce0",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "80%",
          marginBottom:'20px',
          padding: "20px",
          marginTop:'40px',
          marginRight:'40px',
          marginLeft:'40px',
          '@media (min-width: 501px)': {
            '& .MuiTypography-root': {
              fontSize: '1.5rem',fontFamily:'Poppins' // Adjust font size for smaller screens
            },
          },
          '@media (max-width: 500px)': {
            '& .MuiTypography-root': {
              fontSize: '0.7rem',fontFamily:'Poppins' // Adjust font size for smaller screens
            },
          },
         
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexGrow:'1',
            textAlign: "center",
            
          }}
        >
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',maxWidth:'1000px'}}>
          <Typography variant="h4">
           <strong> This web application harnesses the power of machine learning to
            predict the emotions conveyed in textual content. Whether it's
            discerning joy, sadness, or other sentiments, our model provides
            real-time analysis to help users understand the emotional context of
            their text.</strong>
          </Typography>
          </Box>
        </Box>

        <Box sx={{display:'flex',flexGrow:'1'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
           marginLeft:'20px',
           marginRight:'20px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <Typography variant="h5"><strong>Key Features:</strong></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              textAlign: "left",
            }}
          >
            <Typography variant="body1">
            <ul>
              <li>
                <strong>Real-time Emotion Prediction:</strong> Instantly
                predicts emotions such as joy, sadness, anger, and more
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
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutApp;
