import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const SideDrawer = ({ open, toggleDrawer, handleClick }) => {
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          maxWidth: "300px",
          minWidth: "150px",
          width: "200px",
          overflowY: "scroll",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleClick}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ display: "flex", bgcolor: "background.paper" }}>
        <ListItemButton>
          <ListItemText primary="heading" secondary="date"></ListItemText>
        </ListItemButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </List>
    </Drawer>
  );
};
export default SideDrawer;
