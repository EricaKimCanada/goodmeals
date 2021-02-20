import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { detailsMeal } from "../actions/mealActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import YoutubeVideo from "../components/YoutubeVideo";

export default function MealPage(props) {
  const dispatch = useDispatch();
  const mealId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const mealDetails = useSelector((state) => state.mealDetails);
  const { loading, error, meal } = mealDetails;

  useEffect(() => {
    dispatch(detailsMeal(mealId));
  }, [dispatch, mealId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${mealId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div>
              <div className="row" style={{ width: "100%" }}>
                <div className="col-8" style={{ maxWidth: "60%" }}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={meal.image}
                        height="750"
                        image={meal.image}
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Card>
                </div>
                <div className="col-4" style={{ marginLeft: "5%" }}>
                  <h1 style={{ textAlignLast: "center", marginTop: "5%" }}>
                    {meal.name}
                  </h1>
                  <ul style={{ marginTop: "10%" }}>
                    <li style={{ marginBottom: "3%" }}>
                      <Typography>
                        <p
                          style={{
                            width: "fit-content",
                            float: "left",
                            marginRight: "2%",
                            fontWeight: "bold",
                          }}
                        >
                          Price:{" "}
                        </p>
                        <p>${meal.price}</p>
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "3.5%" }}>
                      <Typography style={{ fontWeight: "bold" }}>
                        Description:
                  </Typography>
                      <Typography>
                        <p>{meal.description}</p>
                      </Typography>
                    </li>
                    <li style={{ marginBottom: "4%" }}>
                      <Typography
                        style={{ fontWeight: "bold", paddingBottom: "1%" }}
                      >
                        Ingredients:
                  </Typography>
                      <Typography> {meal.ingredients}</Typography>
                    </li>
                    <li>
                      <div>
                        <Typography
                          style={{ fontWeight: "bold", paddingBottom: "1%" }}
                        >
                          <p>Qty</p>
                        </Typography>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            <option key="1" value="1">
                              1
                        </option>
                            <option key="2" value="2">
                              2
                        </option>
                            <option key="3" value="3">
                              3
                        </option>
                            <option key="4" value="4">
                              4
                        </option>
                            <option key="5" value="5">
                              5
                        </option>
                            <option key="6" value="6">
                              6
                        </option>
                            <option key="7" value="7">
                              7
                        </option>
                            <option key="8" value="8">
                              8
                        </option>
                            <option key="9" value="9">
                              9
                        </option>
                            <option key="10" value="10">
                              10
                        </option>
                          </select>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button
                    onClick={addToCartHandler}
                    size="medium"
                    className="primary block"
                    style={{
                      marginTop: "5%",
                      backgroundColor: "cadetblue",
                      fontWeight: "bold",
                    }}
                  >
                    Add to Cart
              </Button>
                  <div style={{ marginTop: "5.5%" }}>
                    <YoutubeVideo videoId={meal.vidId}></YoutubeVideo>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
