import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Divider from "@material-ui/core/Divider";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "3%",
        paddingBottom: "2%",
        borderTop: "outset",
      }}
    >
      <div
        className="row pt-5"
        style={{ paddingLeft: "30%", textDecoration: "none" }}
      >
        <div className="col-sm-3 col-xs-12">
          <h3>Menu</h3>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/meals" style={{ textDecoration: "none" }}>
              <li>Meals</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Meal Plans</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Recipes</li>
            </Link>
          </ul>
        </div>

        <div className="col-sm-3 col-xs-12">
          <h3>Support</h3>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <li>FAQ</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <li>About Us</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div className="col-sm-3 col-xs-12">
          <h3>Company</h3>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Forum</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/pageReview" style={{ textDecoration: "none" }}>
              <li>Reviews</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Gift Card</li>
            </Link>
          </ul>
          <ul className="list-inline mx-auto justify-content-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Referral Program</li>
            </Link>
          </ul>
        </div>
      </div>

      <Divider
        variant="middle"
        style={{
          marginLeft: "27%",
          width: "50%",
          marginTop: "1%",
          paddingBottom: "0.2%",
        }}
      />

      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-sm-4" style={{ paddingLeft: "2%" }}>
          {" "}
          <p>
            &copy;{new Date().getFullYear()} GOODMEALS | All rights reserved |
            Terms of Service
          </p>
        </div>

        <div className="col-sm-4" style={{ paddingLeft: "10%" }}>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/facebookIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/youtubeIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/instagramIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/twitterIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/pinterestIcon.png"
          ></img>
        </div>

        <div className="col-sm-4" style={{ paddingLeft: "10%" }}>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/paypalIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/amexIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/mcIcon.png"
          ></img>
          <img
            style={{ paddingRight: "5%" }}
            src="/images/icons/visaIcon.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
