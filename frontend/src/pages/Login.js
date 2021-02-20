import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "./Login.css";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
          <h1>Log In</h1>
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
            New to GoodMeals?
            <Link
              to={`/signup?redirect=${redirect}`}
              style={{ paddingLeft: "1%" }}
            >
              Join Now!
            </Link>
          </div>
        </div>

        <form className="loginform" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="email" style={{ paddingLeft: "1%" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
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
            <label htmlFor="password" style={{ paddingLeft: "1%" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
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
            {" "}
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
              Log In
            </Button>
          </div>

          <div>
            <Link to="signup" style={{ paddingLeft: "1%" }}>
              {" "}
              Forgot password?
            </Link>
          </div>
        </form>
      </Paper>
    </div>
  );
}
