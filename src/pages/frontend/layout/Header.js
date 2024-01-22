// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          Car Rental Marketplace
        </Typography>
        <Typography variant="h6" component={Link} to="/dashboard">
          Dashboard
        </Typography>
        <Typography variant="h6" component={Link} to="/login">
          Login
        </Typography>
        <Typography variant="h6" component={Link} to="/register">
          Register
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
