import React, { useEffect } from "react";
import "../App.css";
import MealType from "../components/MealType";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listMeals } from "../actions/mealActions";
import { Grid } from "@material-ui/core";

export default function MiniMeals() {
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  return (
    <div>
      <Grid
        style={{ paddingLeft: "14%", margin: "0px" }}
        lg={12}
        item
        container
        spacing={3}
      >
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row">
            {meals.slice(0, 4).map((filteredMeals) => (
              <Grid
                style={{ padding: "2%" }}
                key={filteredMeals._id}
                item
                lg={3}
              >
                <MealType meal={filteredMeals}></MealType>
              </Grid>
            ))}
          </div>
        )}
      </Grid>
    </div>
  );
}
