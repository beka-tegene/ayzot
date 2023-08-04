import React from "react";
import Layout from "../components/Landing/Layout";
import Hero from "../components/Landing/Hero";
import { Box } from "@mui/material";
import Feature from "../components/Landing/Feature";
import About from "../components/Landing/About";
import Service from "../components/Landing/Service";
import Contact from "../components/Landing/Contact";
import Footer from "../components/Landing/Footer";

const Landing = () => {
  return (
    <Box>
      <Layout />
      <Hero />
      <Feature />
      <About />
      <Service />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Landing;
