import { Box, FormControl, Input, InputLabel, Stack, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Stack
      sx={{ padding: "1rem 6%", backgroundColor: "#001F3F90" }}
      direction={"column"}
      gap={7}
      alignItems={"center"}
    >
      <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
        Contact Us
      </Typography>
      <Box component={"form"}>
      </Box>
    </Stack>
  );
};

export default Contact;
