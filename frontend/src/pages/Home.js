import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MiniMeals from "../components/MiniMeals";
import CarouselSlide from "../components/Carousel";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: "chocolate",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  cardBtn: {
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#ffffff",
    },
  },
  divDivider: {
    backgroundColor: "darkslategrey",
    textAlign: "center",
    color: "#ffffff",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
}));

const plans = [
  {
    title: "Weekly",
    price: "120",
    description: [
      "15 meals",
      "+1 Free Dessert",
      "Mix & Match meals",
      "Scheduled Delivery",
    ],
    buttonText: "Add To Cart",
    buttonVariant: "outlined",
  },
  {
    title: "Bi-Weekly",
    price: "210",
    description: [
      "30 meals",
      "+2 Free Desserts",
      "Mix & Match meals",
      "Scheduled Delivery",
    ],
    buttonText: "Add To Cart",
    buttonVariant: "outlined",
  },
  {
    title: "Monthly",
    price: "400",
    description: [
      "45 meals",
      "+4 Free Desserts",
      "Mix & Match meals",
      "Scheduled Delivery",
    ],
    buttonText: "Add To Cart",
    buttonVariant: "outlined",
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: "url(/images/HomeBanner.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "70vh",
          }}
        ></div>
        <div style={{ paddingBottom: "4%" }}>
          {" "}
          <Link to={`/signup`} style={{ textDecoration: "none" }}>
            <Button
              size="large"
              style={{
                width: "10%",
                backgroundColor: "cadetblue",
                margin: "1.5%",
                fontWeight: "bold",
                marginLeft: "45%",
              }}
            >
              GET STARTED!
            </Button>
          </Link>
        </div>

        <div class="col-xs-12" className={classes.divDivider}>
          <h1>Promotions</h1>
        </div>

        <div style={{ paddingBottom: "4%" }}>
          <CarouselSlide></CarouselSlide>
        </div>

        <div class="col-xs-12" className={classes.divDivider}>
          <h1>Plan Types</h1>
        </div>

        <Container
          maxWidth="md"
          component="main"
          style={{ paddingTop: "4%", paddingBottom: "4%" }}
        >
          <Grid container spacing={5} alignItems="flex-end">
            {plans.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    <ul style={{ listStyle: "none" }}>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      className={classes.cardBtn}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <div class="col-xs-12" className={classes.divDivider}>
          <h1>Popular Dishes</h1>
        </div>

        <div style={{ marginTop: "2%", paddingBottom: "4%" }}>
          <MiniMeals></MiniMeals>
        </div>
      </div>
    </>
  );
}
