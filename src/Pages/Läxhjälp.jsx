import {
  Paper,
  Typography,
  Box,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import personal from "../image/personal.jpeg";
import läxhjlap from "../image/läxhjalp.jpeg";
import pannerPic from "../image/panner.jpeg";
import React from "react";

function Läxhjälp() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      cols: 2,
    },
  ];

  return (
    <Paper sx={{ zIndex: "-99" }}>
      <Box>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Box
              sx={{
                boxShadow: "1px 2px 12px 2px rgba(0,0,0,0.19)",
                display: "flex",
                flexWrap: "wrap",
                margin: "10px 0",
              }}
            >
              <img src={läxhjlap} alt="läx" />
              <Box sx={{ flexGrow: "2", padding: "10px" }}>
                <Typography>English. Many desktop publishing</Typography>
                <Typography>English. Many desktop publishing</Typography>
                <Typography>English. Many desktop publishing</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: "1px 2px 12px 2px rgba(0,0,0,0.19)",
                display: "flex",
                flexWrap: "wrap",
                margin: "10px, 0",
              }}
            >
              <Box sx={{ flexGrow: "2", padding: "10px" }}>
                <Typography>English. Many desktop publishing</Typography>
                <Typography>English. Many desktop publishing</Typography>
                <Typography>English. Many desktop publishing</Typography>
              </Box>
              <img src={läxhjlap} alt="läx" />
            </Box>
          </Grid>
          <Grid item md={4}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img src={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Läxhjälp;
