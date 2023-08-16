import {
  AppBar,
  ImageListItem,
  Stack,
  Toolbar,
  IconButton,
  Drawer,
  ListItemIcon,
  ListItemButton,
  List,
  ListSubheader,
  ListItemText,
} from "@mui/material";
import React from "react";
import logo from "../../Image/Ayzot1.png";
import { HashLink } from "react-router-hash-link";
import {
  Menu,
  Home,
  SupportAgent,
  ContactPage,
  Info,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Layout = () => {
  const [openMenu, setOpenMenu] = useState();
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleSectionClick = (sectionId) => {
    navigate(`/#${sectionId}`);
    setOpenMenu(false);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#001F3F",
        position: "sticky",
        color: "white",
        padding: "0 5%",
      }}
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
          sx={{
            display: { lg: "flex", sm: "flex", xs: "none" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <HashLink to="#home">Home</HashLink>
          <HashLink to="#about">About Us</HashLink>
          <HashLink to="#service">Service</HashLink>
          <HashLink to="#contact">Contact Us</HashLink>
        </Stack>
        <Stack sx={{ display: { sm: "none", xs: "flex" } }}>
          <IconButton onClick={handleMenuClick}>
            <Menu sx={{ color: "white", fontSize: "32px" }} />
          </IconButton>
        </Stack>
        <Drawer
          anchor={"right"}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#001F3F",
              height: "100dvh",
              color: "#B7B7B7",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ backgroundColor: "#001F3F", paddingBottom: "1rem" }}
              >
                <ImageListItem sx={{ width: "80px", height: "9vh" }}>
                  <img
                    src={`${logo}?w=164&h=164&fit=crop&auto=format`}
                    alt="Hero image"
                  />
                </ImageListItem>
              </ListSubheader>
            }
          >
            <HashLink to={"#home"}>
              <ListItemButton
                sx={{ padding: "0.5rem 4rem .5rem 1rem" }}
                onClick={() => handleSectionClick("home")}
              >
                <ListItemIcon>
                  <Home sx={{ color: "#FFD70090" }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </HashLink>
            <HashLink to={"#about"}>
              <ListItemButton
                sx={{ padding: "0.5rem 4rem .5rem 1rem" }}
                onClick={() => handleSectionClick("about")}
              >
                <ListItemIcon>
                  <Info sx={{ color: "#FFD70090" }} />
                </ListItemIcon>
                <ListItemText primary="About us" />
              </ListItemButton>
            </HashLink>
            <HashLink to={"#service"}>
              <ListItemButton
                sx={{ padding: "0.5rem 4rem .5rem 1rem" }}
                onClick={() => handleSectionClick("service")}
              >
                <ListItemIcon>
                  <SupportAgent sx={{ color: "#FFD70090" }} />
                </ListItemIcon>
                <ListItemText primary="Service" />
              </ListItemButton>
            </HashLink>
            <HashLink to={"#contact"}>
              <ListItemButton
                sx={{ padding: "0.5rem 4rem .5rem 1rem" }}
                onClick={() => handleSectionClick("contact")}
              >
                <ListItemIcon>
                  <ContactPage sx={{ color: "#FFD70090" }} />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
              </ListItemButton>
            </HashLink>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
