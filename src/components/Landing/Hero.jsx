import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../Image/Ayzot1.png";

const Hero = () => {
  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{ padding: "3rem 6%", backgroundColor: "#001F3F90" , position:"relative"}}
      alignItems={"center"}
      flexWrap={"wrap"}
      id={"home"}
    >
      <Box sx={{position:"absolute" ,width:"30rem" ,backgroundColor:"#00000050", padding:"4rem",left:"35%",zIndex:3 , backdropFilter:"blur(5px)"}}>
        <Typography variant="h3" sx={{fontWeight:"600",color:"#FFFFFFC0"}}>Coming soon!!</Typography>
      </Box>
      <Stack flex={"1 1 50%"} direction={"column"} gap={3}>
        <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
          Ayzot.com
        </Typography>
        <Typography
          variant="span"
          sx={{ color: "#001F3F90", letterSpacing: ".1em" }}
        >
          The target of Ayzot is to connect and facilitate trade between
          businesses and consumers anywhere through its various online platforms
          and marketplaces. It aims to provide a robust ecosystem for
          e-commerce, digital media, and other technological solutions.
          Additionally, Ayzot seeks to promote small and medium-sized
          enterprises (SMEs) by enabling them to sell their products and
          services on its platforms and expand their international reach.
        </Typography>
        <Box >
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
      <Stack flex={"1 1 45%"} direction={"column"} gap={2} alignItems={"flex-end"}>
        <ImageListItem>
          <img
            src={`${logo}?w=164&h=164&fit=crop&auto=format`}
            alt="Hero image"
          />
          <Box sx={{display:"flex" ,alignItems:"flex-end" ,justifyContent:"flex-end" }}>
            <Typography sx={{backgroundColor:"#FFD700",color:"#001F3F90", width:"220px" ,padding:"1rem"}}>“Empower your focus, become your own hero.”</Typography>
          </Box>
        </ImageListItem>
      </Stack>
    </Stack>
  );
};

export default Hero;
