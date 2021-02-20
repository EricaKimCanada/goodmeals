import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MealType(props) {
  const classes = useStyles();
  const { meal } = props;

  return (
    <div>
      <Card
        key={meal._id}
        className={classes.root}
        style={{ borderBottom: "solid" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={meal.image}
            height="160"
            image={meal.image}
            title="Contemplative Reptile"
          />
          <CardContent
            style={{
              backgroundColor: "lightgrey",
              color: "black",
              marginTop: "1%",
              height: "200px",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {meal.name}
            </Typography>
            <Typography variant="body2" component="p">
              {meal.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ backgroundColor: "grey", color: "white", fontWeight: "900" }}
        >
          <Typography style={{ fontWeight: "900" }}>
            <a style={{ textDecoration: "none" }} href={`/meals/${meal._id}`}>
              <Button
                size="small"
                color="primary"
                style={{ fontWeight: "700" }}
              >
                Learn More
              </Button>
            </a>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
