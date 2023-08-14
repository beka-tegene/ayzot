import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Electronics  from "../../Image/altumcode-Ui3zMjpMrmM-unsplash.jpg";
import AssetSellAndBuy from "../../Image/krzysztof-hepner-o_x11ORH9vQ-unsplash.jpg";
import Product from "../../Image/istockphoto-1385196919-170667a.webp";
import ToRentAndForRent  from "../../Image/ass 5.jpg";
import CustomerInterest  from "../../Image/clay-banks-Ox6SW103KtM-unsplash.jpg";
import AssetToRentAndForRent from "../../Image/premium_photo-1670537994863-5ad53a3214e0.jpg";
import Coming from "./Coming";
const Service = () => {
  const [display , setDisplay] = useState(false)
  const ComingSoonHandler=()=>{
    setDisplay(true)
  }
  const displayHiddenHandler=()=>{
    setDisplay(false)
  }
  return (
    <Stack
      sx={{ padding: "1rem 6%", backgroundColor: "#001F3F90" }}
      direction={"column"}
      gap={7}
      alignItems={"center"}
      id={"service"}
    >
      <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
        Service
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={7}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Electronics}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Electronics
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={AssetSellAndBuy}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Asset Sell And Buy
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Product}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Product
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={AssetToRentAndForRent}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Asset To Rent And For Rent
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={ToRentAndForRent}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              To Rent And For Rent
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "345px",
          }}
          onClick={ComingSoonHandler}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={CustomerInterest}
          />
          <CardContent sx={{ color: "#001F3F" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Customer Interest
            </Typography>
          </CardContent>
        </Card>
        {display && <Coming displayHiddenHandler={displayHiddenHandler} />}
      </Stack>
    </Stack>
  );
};

export default Service;
