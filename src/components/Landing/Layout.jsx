import { AppBar, ImageListItem, Link, Stack, Toolbar } from "@mui/material";
import React from "react";
import logo from "../../Image/Ayzot1.png";
const Layout = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "#001F3F", position: "sticky", color: "white",padding:"0 5%" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"}>
          <ImageListItem sx={{ width: "80px", height: "9vh" }}>
            <img
              src={`${logo}?w=164&h=164&fit=crop&auto=format`}
              alt="Hero image"
            />
          </ImageListItem>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Link
            to="/"
            sx={{ textDecoration: "none", cursor: "pointer", fontSize: "16px",color:"#FFFFFF" }}
          >
            Home
          </Link>
          <Link
            to="/"
            sx={{ textDecoration: "none", cursor: "pointer", fontSize: "16px",color:"#FFFFFF"  }}
          >
            About Us
          </Link>
          <Link
            to="/"
            sx={{ textDecoration: "none", cursor: "pointer", fontSize: "16px",color:"#FFFFFF"  }}
          >
            Service
          </Link>
          <Link
            to="/"
            sx={{ textDecoration: "none", cursor: "pointer", fontSize: "16px",color:"#FFFFFF"  }}
          >
            Contact Us
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
