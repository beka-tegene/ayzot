import { Box, Typography } from "@mui/material";
import React from "react";

const Coming = (props) => {
  return (
    <Box sx={{zIndex: 3,position:"fixed"}} onClick={props.displayHiddenHandler}>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          backgroundColor: "#0003",
        }}
        onClick={props.displayHiddenHandler}
      ></Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          color: "#001F3F",
          position: "fixed",
          backgroundColor: "#FFFFFF",
          top:"30%",
          left:"30%",
          right:"30%",
          bottom:"30%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
        onClick={props.displayHiddenHandler}
      >
        Coming soon!!
      </Typography>
    </Box>
  );
};

export default Coming;
