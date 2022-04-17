import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React, { useContext } from "react";
import pannerPic from "../image/panner.jpeg";

import { Link } from "react-router-dom";
import { DataContext } from "./Context";
function Panner() {
  const [data, setData] = useContext(DataContext);
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid sx={{ height: "250px" }} item md={12} xs={12}>
          <img
            src={pannerPic}
            alt="panner"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        {data.map((item) => (
          <Grid key={item.id} item md={4} xs={6}>
            <Card>
              <CardMedia component="img" src={item.image} height="160px" />
              <CardContent>
                <Typography>{item.titel}</Typography>
                <Typography>{item.desc}</Typography>
                <CardActions sx={{ backgroundColor: "gray" }}>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/${item.id}`}
                  >
                    Read More
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          margin: "10px 0",
          padding: "0",
          boxShadow: "1px 2px 12px 2px rgba(0,0,0,0.19)",
        }}
      >
        <Grid item md={8} xs={6}>
          <Typography>About us</Typography>
          <Typography>
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like)
          </Typography>
        </Grid>
        <Grid sx={{ height: "200px" }} item md={4} xs={6}>
          <img
            src={pannerPic}
            alt="about"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Panner;
