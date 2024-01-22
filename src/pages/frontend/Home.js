// pages/Home.js
import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Paper, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Header />
      <Paper elevation={0} style={heroStyles}>
        <Box textAlign="center">
          <Typography variant="h2" gutterBottom>
            Rent a car in your neighborhood
          </Typography>
          <Typography variant="subtitle1">
            Find the perfect car for your journey
          </Typography>
        </Box>
      </Paper>
      <Footer />
    </div>
  );
};

const heroStyles = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/home-hero.jpg)`, // Replace with the actual path to your background image
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "550px", // Adjust the height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff", // Text color
};

export default Home;
