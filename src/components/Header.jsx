import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Main";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginIcon from "@mui/icons-material/Login";
import JIO from "../icons/jioBlue.png";

const Header = () => {
  const { sessionId } = useContext(AppContext);
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={JIO} width={"75vh"} height={"50vh"} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SESSION ID: {sessionId}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            startIcon={<HomeIcon />}
            color="inherit"
            component={Link}
            to="/"
          >
            {" "}
            Home
          </Button>
          <Button
            startIcon={<PersonOutlineIcon />}
            color="inherit"
            component={Link}
            to="/profile"
          >
            {" "}
            Profile
          </Button>
          <Button
            startIcon={<LoginIcon />}
            color="inherit"
            component={Link}
            to="/login"
          >
            {" "}
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
