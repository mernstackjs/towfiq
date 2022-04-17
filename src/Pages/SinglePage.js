import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Card,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Components/Context";

function SinglePage() {
  const { id } = useParams();
  const [data, setdata] = useContext(DataContext);
  return (
    <div>
      {data
        .filter((item) => item.id === id)
        .map((item) => (
          <Paper key={item.id}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Card>
                  <CardMedia src={item.image} component="img" height="360px" />
                  <CardContent>
                    <Typography>{item.titel}</Typography>
                    <Typography>{item.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/Home">Back</Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </div>
  );
}

export default SinglePage;
