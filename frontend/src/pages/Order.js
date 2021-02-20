import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import "./Order.css";

export default function Order(props) {
  //redux part
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order) {
      dispatch(detailsOrder(orderId));
    } else {
      if (order.paymentMethod === "PayPal") {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady]);

  const successPaymentHandler = (paymentResult) => {
    //dispatch(payOrder(order, paymentResult));
  };

  //react part
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
        <div
          style={{
            backgroundImage: "url(/images/orderimg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "3%",
            marginTop: "-2%",
            paddingBottom: "3%",
            height: "100%",
            paddingLeft: "2em",
          }}
        >
          <div style={{ paddingTop: "2em", paddingLeft: "31%" }}>
            <h1>Ordered Successfully!</h1>
            <h2> Your Order Details</h2>
            <h2>Order Number: {order._id}</h2>
          </div>
          <div className="mrgauto top">
            <div className="pocol-2">
              <ul>
                <li className="unli">
                  <div className="pocard pocard-body">
                    <h2>Delivery Information</h2>
                    {order.deliveryMethod === "Ship" ? (
                      <div className="pdleft">
                        <p>
                          <strong>Name:</strong> {order.shippingAddress.fullName}{" "}
                          <br />
                          <strong>Address: </strong> {order.shippingAddress.address}
                      , {order.shippingAddress.city},{order.shippingAddress.province},{" "}
                          {order.shippingAddress.postalCode}
                          <br />
                          <strong>Phone:</strong> {order.shippingAddress.phone}
                        </p>
                      </div>
                    ) : (
                        <div className="pdleft">
                          <h2>Pickup - pickup location</h2>
                          <div style={{ paddingLeft: "1em" }}>
                            <p>GoodMeals</p>
                            <p>130 Dundas Street, London ON N6A1G2</p>
                            <p>phone: 519)452-4430</p>
                          </div>
                        </div>
                      )}
                  </div>
                </li>
                <li className="unli">
                  <div className="pocard pocard-body">
                    <h2>Payment</h2>
                    <p className="pdleft">
                      <strong>{order.paymentMethod}</strong>

                      {order.paymentMethod === "CreditCard" ? (
                        <div>
                          <strong>Card Holder:</strong>{" "}
                          {order.creditCardInfo.holderName} <br />
                          <strong>Card Number: </strong>{" "}
                          {order.creditCardInfo.cardNumber.substring(0, 4)} *** *******
                          <br />
                          <strong>Expiry Date: </strong>{" "}
                          {order.creditCardInfo.expiryDate}
                          <br />
                        </div>
                      ) : (
                          <div></div>
                        )}
                    </p>
                  </div>
                </li>
                <li className="unli">
                  <div className="pocard pocard-body">
                    <h2>Order Items</h2>
                    <ul>
                      {order.orderItems.map((item) => (
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
                    <p className="pdleft">
                      <strong>Items:</strong> ${order.itemsPrice.toFixed(2)} <br />
                      <strong>Tax: </strong> ${order.taxPrice.toFixed(2)}
                      <br />
                      <strong>Total:</strong>{" "}
                      <strong>${order.totalPrice.toFixed(2)}</strong>
                    </p>
                  </div>
                </li>
                {order.paymentMethod === "PayPal" && (
                  <li className="unli">
                    {!sdkReady ? (
                      <LoadingBox></LoadingBox>
                    ) : (
                        <>
                          <PayPalButton
                            amount={order.totalPrice}
                            onSuccess={successPaymentHandler}
                          ></PayPalButton>
                        </>
                      )}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      );
}
