import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import useMediaQuery from "@mui/material/useMediaQuery";

const SideDrawer = ({ open, toggleDrawer, handleClick }) => {
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      variant="persistent"
      sx={{
        width: mdScreen ? "300px" : "100%",

        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: mdScreen ? "300px" : "100%",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          overflowY: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ListItemButton>
            <ListItemText primary="heading" secondary="date"></ListItemText>
          </ListItemButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </List>
    </Drawer>
  );
};
export default SideDrawer;
