import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ResultsHistory = () => {
  return (
    <>
      <Box
        sx={{flexGrow: 1,
          flexDirection: "column",
          maxWidth: "300px",
          width: "100%",
          maxHeight:'100%',
          borderRight: " 2px solid #dadce0",
          display: { xs: "none", sm: "flex" },
          overflowY:'auto',
          
        }}
      >
        <List >
          <Box sx={{display:'flex'}}>
          <ListItemButton >
            <ListItemText primary="heading" secondary="date"></ListItemText>
          </ListItemButton>
          <IconButton ><DeleteIcon/></IconButton>
          </Box>
        </List>
      </Box>
    </>
  );
};
export default ResultsHistory;
