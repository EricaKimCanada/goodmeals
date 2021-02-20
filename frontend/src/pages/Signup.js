import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "./Signup.css";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignup = useSelector((state) => state.userSignup);
  const { userInfo, loading, error } = userSignup;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Please check password and confirm password.");
    } else {
      dispatch(signup(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div
      style={{
        backgroundImage: "url(/images/LogInBanner.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "3%",
        marginTop: "-2%",
        paddingBottom: "3%",
        height: "100%",
      }}
    >
      <Paper
        elevation={24}
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginTop: "3%",
          marginBottom: "5%",
          paddingBottom: "4%",
          backgroundColor: "aliceblue",
        }}
      >
        <Typography style={{ textAlign: "center", paddingTop: "10%" }}>
          <h1>Create Account</h1>
        </Typography>
        <span
          style={{
            height: "5px",
            width: "75px",
            backgroundColor: "olivedrab",
            display: "block",
            margin: "auto",
          }}
        ></span>
        <div style={{ textAlign: "center", marginTop: "3%" }}>
          <div>
            Returning Customer?{" "}
            <Link to={`/login?redirect=${redirect}`}> Login </Link>
          </div>
        </div>

        <form className="signupform" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              placeholder=""
              required
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid #e9ddd0",
                marginTop: "0",
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder=""
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid #e9ddd0",
                marginTop: "0",
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              placeholder=""
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid #e9ddd0",
                marginTop: "0",
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder=""
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid #e9ddd0",
                marginTop: "0",
              }}
            ></input>
          </div>
          <div>
            <Button
              type="submit"
              size="large"
              color="black"
              style={{
                fontWeight: "900",
                backgroundColor: "cadetblue",
                marginTop: "10%",
              }}
            >
              Create Account
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
