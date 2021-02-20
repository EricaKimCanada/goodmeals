import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          GoodMeals
          <i className="fas fa-utensils" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/diets" className="nav-links" onClick={closeMobileMenu}>
              Diet Plans <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/meals" className="nav-links" onClick={closeMobileMenu}>
              Meals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pageReview"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
          </li>
        </ul>
        {userInfo ? (
          <div className="userdropdown">
            <Link to="#" style={{ color: "khaki" }}>
              {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
            </Link>
            <ul className="userdropdown-content">
              <li>
                <Link
                  to="/profile"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  User Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/orderhistory"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  to="#logout"
                  onClick={logoutHandler}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
            <Button className="nav-button" />
          )}
      </nav>
    </div>
  );
}

export default Navbar;
