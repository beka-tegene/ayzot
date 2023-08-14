import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Clipart from "../../Image/clipart 1.svg";
import callCenter from "../../Image/callcenter 1.svg";
import office from "../../Image/offic clip art 1.svg";
const Feature = () => {
  return (
    <Stack
      direction={"column"}
      gap={7}
      alignItems={"center"}
      sx={{ padding: "3rem 6%" , backgroundColor:"#001F3F" }}
      id={"feature"}
    >
      <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
        Key Features:
      </Typography>
      <Stack direction={"row"} gap={7} flexWrap={"wrap"}  justifyContent={"center"}>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img src={Clipart} alt="" />
              </Avatar>
            }
          />
          <CardContent sx={{color:"#FFD700ee"}}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={600}
            >
              Mobile App Convenience
            </Typography>
            <Typography variant="body2" color="#001F3F90">
              Ayzot's user-friendly mobile app empowers you to search Ayzot app.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img src={callCenter} alt="" />
              </Avatar>
            }
          />
          <CardContent sx={{color:"#FFD700ee"}}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={600}
            >
              Call Center
            </Typography>
            <Typography variant="body2" color="#001F3F90">
              We understand that every individual's requirements are unique. Our
              dedicated call center staff is ready to assist you
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img src={office} alt="" />
              </Avatar>
            }
          />
          <CardContent sx={{color:"#FFD700ee"}}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={600}
            >
              Direct Office Support
            </Typography>
            <Typography variant="body2" color="#001F3F90">
              For those who prefer a face-to-face interaction, Ayzot offers
              physical offices where you can meet our professional brokers. Our
              offices are equipped with the latest technology
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Feature;
