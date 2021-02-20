import React, { useEffect, useState } from "react";
import "../App.css";
import MealType from "../components/MealType";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listMeals } from "../actions/mealActions";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SearchFeature from "../components/SearchFeature";

export default function Vegetarian() {
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  return (
    <div>
      <div>
        <img
          src={"images/vegetarian/VegetarianBanner.jpg"}
          alt="VegetarianBanner"
          style={{
            marginLeft: "31.5%",
            marginTop: "1.5%",
            width: "37%",
            height: "auto",
          }}
        />
      </div>
      <Divider
        variant="middle"
        style={{
          marginLeft: "25%",
          width: "50%",
          marginTop: "1%",
          paddingBottom: "0.2%",
        }}
      />
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 2rem' }}>
          <SearchFeature onChangeSearch={handleSearch} searchTerm={searchTerm}>
          </SearchFeature>
        </div>
        <Grid
          style={{ paddingLeft: "3%", margin: "0px" }}
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
                  {meals
                    .filter((type) => type.dietplanName === "vegetarian")
                    .filter((type) => type.name.toLowerCase().includes(searchTerm.toLowerCase()) || type.ingredients.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((filteredMeals) => (
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
    </div>
  );
}
