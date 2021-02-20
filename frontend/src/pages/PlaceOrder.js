import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from "@material-ui/core/Button";
import "./Order.css";

import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

export default function PlaceOrder(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  //from redux store
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2)); // 1.173 => "1.17" => 1.17
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.taxPrice = toPrice(0.13 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    //replace cartItems to orderItems.
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      //order created successfully
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div
      style={{
        backgroundImage: "url(/images/paymentimg2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "3%",
        marginTop: "-2%",
        paddingBottom: "3%",
        height: "100%",
        paddingLeft: "2em",
      }}
    >
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="porow top">
        <div className="pocol-2">
          <ul>
            <li className="unli">
              <div className="pocard pocard-body">
                <h2>Delivery Information</h2>

                {cart.deliveryMethod === "Ship" ? (
                  <div className="pdleft">
                    <p>
                      <strong>Name:</strong> {cart.shippingAddress.fullName}{" "}
                      <br />
                      <strong>Address: </strong> {cart.shippingAddress.address},{" "}
                      {cart.shippingAddress.city},{" "}
                      {cart.shippingAddress.province},{" "}
                      {cart.shippingAddress.postalCode}
                      <br />
                      <strong>Phone:</strong> {cart.shippingAddress.phone}
                    </p>
                  </div>
                ) : (
                    <div className="pdleft">
                      <p>Pickup - pickup location</p>
                      <p>GoodMeals</p>
                      <p>130 Dundas Street, London ON N6A1G2</p>
                      <p>phone: 519)452-4430</p>
                    </div>
                  )}
              </div>
            </li>
            <li className="unli">
              <div className="pocard pocard-body">
                <h2>Payment</h2>
                <p className="pdleft">
                  <strong>{cart.paymentMethod}</strong>

                  {cart.paymentMethod === "CreditCard" ? (
                    <div>
                      <strong>Card Holder:</strong>{" "}
                      {cart.creditCardInfo.holderName} <br />
                      <strong>Card Number: </strong>{" "}
                      {cart.creditCardInfo.cardNumber.substring(0, 4)} *** *******
                      <br />
                      <strong>Expiry Date: </strong>{" "}
                      {cart.creditCardInfo.expiryDate}
                      <br />
                    </div>
                  ) : (
                      <div>
                        After clicking “Place order”, you will see PayPal button
                        to complete your purchase securely.
                      </div>
                    )}
                </p>
              </div>
            </li>
            <li className="unli">
              <div className="pocard pocard-body">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li className="unli pdleft" key={item.meal}>
                      <div className="orderlist">
                        <img
                          style={{ width: "25%", height: "25%" }}
                          src={item.image}
                          alt={item.name}
                        ></img>
                        <div>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/meals/${item.meal}`}
                          >
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="unli">
              <div className="pocard pocard-body">
                <h2>Order Summary</h2>
                <p className="pdleft orderprice">
                  <strong>Items:</strong> ${cart.itemsPrice.toFixed(2)} <br />
                  <strong>Tax: </strong> ${cart.taxPrice.toFixed(2)}
                  <br />
                  <strong>Total:</strong>{" "}
                  <strong>${cart.totalPrice.toFixed(2)}</strong>
                </p>
                <Button
                  className="orderbutton"
                  type="submit"
                  size="large"
                  color="black"
                  style={{
                    width: "60%",
                    fontWeight: "900",
                    backgroundColor: "cadetblue",
                    marginTop: "8%",
                    marginLeft: "15%",
                  }}
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </Button>
              </div>
            </li>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
          </ul>
        </div>
      </div>
    </div>
  );
}
