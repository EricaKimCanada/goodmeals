import React from "react";
import "./PageReview.css";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

export default function PageReview() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/marbleimg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "5%",
          marginTop: "-2%",
          paddingBottom: "3%",
          height: "100%",
        }}
      >
        <div>
          <Card className="card card-5">
            <div style={{ display: "flex" }}>
              <CardHeader
                avatar={
                  <Avatar className="avatar" style={{ backgroundColor: "red" }}>
                    P
                  </Avatar>
                }
                title="Philip "
                subheader=""
              />
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ paddingLeft: "3%", paddingTop: "2%" }}
              />
            </div>
            <CardContent style={{ display: "inline-block" }}>
              <Typography>Enjoy cooking and Greate healthy food</Typography>
              <Typography>
              GoodMeals has allowed me to enjoy cooking, eat better and save money! I am not making unnecessary purchases at the grocery store and overspending. Preparation of meals is quick and easy and the food is delicious!!!!
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ alignContent: "center" }}>
          <Card className="card card-5">
            <div style={{ display: "flex" }}>
              <CardHeader
                avatar={
                  <Avatar className="avatar" style={{ backgroundColor: "red" }}>
                    S
                  </Avatar>
                }
                title="Stephan"
                subheader=""
              />
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ paddingLeft: "3%", paddingTop: "2%" }}
              />
            </div>
            <CardContent style={{ display: "inline-block" }}>
              <Typography>Easy to use the ording process</Typography>
              <Typography>
                Easy ordering and changing, great food and groceries
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ alignContent: "center" }}>
          <Card className="card card-5">
            <div style={{ display: "flex" }}>
              <CardHeader
                avatar={
                  <Avatar className="avatar" style={{ backgroundColor: "red" }}>
                    T
                  </Avatar>
                }
                title="Tony"
                subheader=""
              />
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ paddingLeft: "3%", paddingTop: "2%" }}
              />
            </div>
            <CardContent>
              <Typography>The meals are fantastic!</Typography>
              <Typography>
              The meals are fantastic! There is a good variety each week. They all taste great!  All of the meals are fresh, and prepared just right...not overcooked, veggies are NOT soft or soggy. The delivery is right on time each week. Very dependable. I would recommend this meal service to all of my friends and family!
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ alignContent: "center" }}>
          <Card className="card card-5">
            <div style={{ display: "flex" }}>
              <CardHeader
                avatar={
                  <Avatar className="avatar" style={{ backgroundColor: "red" }}>
                    L
                  </Avatar>
                }
                title="Lianne"
                subheader=""
              />
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ paddingLeft: "3%", paddingTop: "2%" }}
              />
            </div>
            <CardContent>
            <Typography> Great recipes, easy to follow, and very yummy dishes.</Typography>
              <Typography>
              My husband and daughter clean their plates every meal and tell me how delicious it was. And our financial budget has been cut in half. Honestly I love this company and I am so grateful for you. Thank you so much.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ alignContent: "center" }}>
          <Card className="card card-5">
            <div style={{ display: "flex" }}>
              <CardHeader
                avatar={
                  <Avatar className="avatar" style={{ backgroundColor: "red" }}>
                    J
                  </Avatar>
                }
                title="Jim"
                subheader=""
              />
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ paddingLeft: "3%", paddingTop: "2%" }}
              />
            </div>
            <CardContent>
            <Typography>Highly recomanded</Typography>
              <Typography>
              Highly recomanded, the food taste good & delivery is always on time.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
