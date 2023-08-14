import { Send } from "@mui/icons-material";
import {
  IconButton,
  ImageListItem,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../Image/Ayzot1.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <Stack
      sx={{ padding: "1rem 6%", backgroundColor: "#001F3F", color: "#FFFFFF" }}
      direction={"column"}
      gap={7}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
        flexWrap={"wrap"}
      >
        <Stack direction={"row"}>
          <ImageListItem sx={{ width: "250px" }}>
            <img
              src={`${logo}?w=164&h=164&fit=crop&auto=format`}
              alt="Hero image"
            />
          </ImageListItem>
        </Stack>
        <Stack direction={"column"} gap={2}>
          <Typography variant="h5">Quick access</Typography>
          <Stack
            direction={"column"}
            gap={1}
            sx={{ width: "70%", margin: "0 auto" }}
          >
            <HashLink to="#home">Home</HashLink>
            <HashLink to="#feature">Feature</HashLink>
            <HashLink to="#about">About us</HashLink>
            <HashLink to="#service">Service</HashLink>
            <HashLink to="#contact">Contact us</HashLink>
          </Stack>
        </Stack>
        <Stack>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="subscribe"
              inputProps={{ "aria-label": "subscribe" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <Send />
            </IconButton>
          </Paper>
        </Stack>
      </Stack>
      <Typography sx={{ color: "gray" }}>
        Designed by Ayzot team 2023. Ayzot ,©CopyRight All Reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
