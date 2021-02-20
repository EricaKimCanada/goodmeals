import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { listMeals } from "../actions/mealActions";

export default function CarouselSlide(props) {
  const handleDragStart = (e) => e.preventDefault();

  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  const items = [
    <Link
      to={`/meals/5fcbec2f87ed8cf3591b89ff`}
      style={{ textDecoration: "none" }}
    >
      <img
        src="images/keto/ketoTacoBurgerBanner.jpg"
        onDragStart={handleDragStart}
      />
    </Link>,
    <Link
      to={`/meals/5fcc1b2887ed8cf3591b8a00`}
      style={{ textDecoration: "none" }}
    >
      <img
        src="images/vegetarian/vegetarianBasilParmesanSoupBanner.jpg"
        onDragStart={handleDragStart}
      />
    </Link>,
  ];

  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={900}
        animationType="fadeout"
        infinite
        disableButtonsControls
        mouseTracking
        items={items}
      />
    </div>
  );
}
