import { Facebook, Instagram, LocalPhone, LocationOn, Mail, Telegram, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Icon,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Stack
      sx={{ padding: "1rem 6%", backgroundColor: "#001F3F90", width: "100%" }}
      direction={"column"}
      gap={7}
      alignItems={"center"}
    >
      <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
        Contact Us
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"stretch"}
        justifyContent={"center"}
        sx={{ width: "70%" }}
      >
        <Box
          component={"form"}
          sx={{
            backgroundColor: "#FFFFFF",
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "2rem",
            borderRadius: "10px 0 0 10px ",
          }}
        >
          <Typography>
            Fill free to contact us any time .we will get back to you as soon as
            we can !
          </Typography>
          <Stack
            direction={"column"}
            sx={{ width: "80%", margin: "0 auto" }}
            gap={2}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#222C65",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                },
              }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="text"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#222C65",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                },
              }}
            />

            <TextareaAutosize
              id="Message"
              aria-label="Message"
              placeholder="Message"
              variant="outlined"
              minRows={5}
              maxRows={5}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: 8,
                borderColor: "#ccc",
                resize: "none",
                fontSize: "16px",
                "&:hover": {
                  borderColor: "#aaa",
                },
              }}
            />

            <Button variant="contained" type="submit">
              Send
            </Button>
          </Stack>
        </Box>
        <Stack
          flex={"1 1 50%"}
          sx={{
            backgroundColor: "#001F3F",
            borderRadius: "0 10px 10px 0",
            padding: "2rem",
            color: "#FFFFFF ",
          }}
          direction={"column"}
          gap={3}
          alignItems={"center"}
        >
          <Stack direction={"column"} gap={3}>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <LocationOn sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>Addis Ababa, 22 </Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <LocalPhone sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>+251943013372</Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <Mail sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>ayzotdams@gmail.com </Typography>
            </Stack>
            <Divider
              sx={{ width: "80%", height: ".2vh", backgroundColor: "gray" , margin:"0 auto"}}
            />
            <Stack direction={"row"} gap={2}>
              <Icon>
                <Facebook sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>ayzotdams</Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <YouTube sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>ayzotdams</Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <Instagram sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>ayzotdams</Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Icon>
                <Telegram sx={{ color: "#FFFFFF" }} />
              </Icon>
              <Typography>@ayzotdams</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
