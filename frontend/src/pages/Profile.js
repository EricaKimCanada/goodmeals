import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import "./Signup.css";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Please check password and confirm password.");
    } else {
      //dispatch(updateUserProfile({ userId: user._id, name, email, password }));
      dispatch(
        updateUserProfile({ userId: userInfo._id, name, email, password })
      );
    }
  };

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
          <h1>Update Profile</h1>
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

        <form className="signupform" onSubmit={submitHandler}>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile Updated Successfully
                </MessageBox>
              )}
              <div>
                <label htmlFor="name" style={{ paddingLeft: "1%" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder=""
                  value={name}
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
                <label htmlFor="email" style={{ paddingLeft: "1%" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder=""
                  value={email}
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
                  id="password"
                  type="password"
                  placeholder=""
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
                <label htmlFor="confirmPassword" style={{ paddingLeft: "1%" }}>
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder=""
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
                  Update
                </Button>
              </div>
            </>
          )}
        </form>
      </Paper>
    </div>
  );
}
