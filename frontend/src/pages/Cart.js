import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MessageBox from "../components/MessageBox";
import "./Cart.css";

export default function Cart(props) {
  const mealId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const roundTo = require("round-to");
  const cart = useSelector((state) => state.cart);
  const [show, setshow] = useState(true);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (mealId) {
      dispatch(addToCart(mealId, qty));
    }
  }, [dispatch, mealId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id)); //imported from cartAction
  };

  const removeFromCartAll = (cartItems) => {
    for (var i = 0; i < cartItems.length; ++i) {
      dispatch(removeFromCart(cartItems[i].meal));
    }
  };

  const addHandler = () => {
    props.history.push("/meals");
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/cartimg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "3%",
        marginTop: "-2%",
        paddingBottom: "3%",
        height: "100%",
      }}
    >
      <form className="rowcart">
        <div className="colcart">
          {cartItems.length === 0 ? (
            <div></div>
          ) : (
            <Link
              to={`/login?redirect=shipping`}
              style={{
                marginRight: "3%",
                marginTop: "5%",
                float: "right",
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
                backgroundColor: "cadetblue",
                padding: "1%",
              }}
            >
              PROCEED TO CHECKOUT
            </Link>
          )}

          <h1 style={{ paddingLeft: "3%", paddingTop: "5%" }}>Meal Cart</h1>
          {cartItems.length === 0 ? (
            <div style={{ paddingLeft: "40%", paddingTop: "10%" }}>
              Cart is empty. <Link to="/meals">Go Meals</Link>
            </div>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.meal} className="cartli">
                  <div className="rowdisplay">
                    <img
                      style={{ width: "20%", height: "20%" }}
                      src={item.image}
                      alt={item.name}
                      className="imgcart"
                    ></img>
                    <div style={{ width: "40%" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/meals/${item.meal}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.meal, Number(e.target.value)))
                        }
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
                    <div>${item.price}</div>
                    <div style={{ width: "10%" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        onClick={() => removeFromCartHandler(item.meal)}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
              <div className="price">
                <h4>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                  ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h4>
                <h4 style={{ float: "right", paddingRight: "11%" }}>
                  Tax : $
                  {roundTo(
                    cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 0.13,
                    2
                  )}
                </h4>
                <h3 style={{ float: "right", paddingRight: "11%" }}>
                  Total : $
                  {roundTo(
                    cartItems.reduce((a, c) => a + c.price * c.qty, 0) +
                      cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 0.13,
                    2
                  )}
                </h3>
              </div>
            </ul>
          )}
        </div>
        <div style={{ paddingTop: "10%", paddingLeft: "28%" }}>
          <Button
            type="button"
            size="large"
            style={{
              width: "28%",
              backgroundColor: "cadetBlue",
              fontWeight: "bold",
            }}
            onClick={() => addHandler()}
          >
            Add More Meal
          </Button>
          <Button
            type="button"
            size="large"
            style={{
              width: "30%",
              backgroundColor: "cadetBlue",
              marginLeft: "5%",
              fontWeight: "bold",
            }}
            onClick={() => removeFromCartAll(cartItems)}
            disabled={cartItems.length === 0}
          >
            Remove all meals
          </Button>
        </div>
      </form>
    </div>
  );
}
