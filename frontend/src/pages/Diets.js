import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Diets() {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={6} style={{ padding: "2%" }}>
          <Link to="/keto">
            <CardMedia
              component="img"
              alt="Keto Diet Sign"
              height="400"
              image="images/keto/ketoDiet.jpg"
              title="Keto Diet Sign"
            />
          </Link>
        </Grid>

        <Grid item xs={6} style={{ padding: "2%" }}>
          <Link to="/vegan">
            <CardMedia
              component="img"
              alt="Vegan Diet Sign"
              height="400"
              image="images/veganDiet.jpg"
              title="Vegan Diet Sign"
            />
          </Link>
        </Grid>

        <Grid item xs={6} style={{ padding: "2%" }}>
          <Link to="/paleo">
            <CardMedia
              component="img"
              alt="Paleo Diet Sign"
              height="400"
              image="images/paleoDiet.jpg"
              title="Paleo Diet Sign"
            />
          </Link>
        </Grid>

        <Grid item xs={6} style={{ padding: "2%" }}>
          <Link to="/vegetarian">
            <CardMedia
              component="img"
              alt="Vegetarian Diet Sign"
              height="400"
              image="images/vegetarianDiet.jpg"
              title="Vegetarian Diet Sign"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
