import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../Image/smartphone-transfer-data-in-online-shopping-process-free-vector.jpg";

const About = () => {
  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{ padding: "3rem 6%", backgroundColor: "#001F3F" }}
      alignItems={"center"}
    >
      <Stack
        flex={"1 1 40%"}
        direction={"column"}
        gap={2}
        alignItems={"flex-end"}
      >
        <ImageListItem>
          <img
            src={`${logo}?w=164&h=164&fit=crop&auto=format`}
            alt="Hero image"
          />
        </ImageListItem>
      </Stack>
      <Stack flex={"1 1 45%"} direction={"column"} gap={3} sx={{backgroundColor:"#FFFFFF10",padding:"2rem"}}>
        <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
          About Us
        </Typography>
        <Typography
          variant="span"
          sx={{ color: "#FFFFFF90", letterSpacing: ".1em" }}
        >
          Welcome to Ayzot, your reliable and innovative property and online
          platform brokerage partner. Established with a vision to redefine the
          way you buy and sell houses and cars, Ayzot is backed by a team of
          dedicated experts and powered by the cutting-edge technology of
          Alibaba. Our mission is to make your property journey seamless,
          efficient, and rewarding.
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              flex: "auto",
              backgroundColor: "#001F3F",
              color: "#FFFFFF",
              borderRadius: "0",
              "&:hover": { backgroundColor: "#FFD700", color: "#FFFFFF" },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
