import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import { saveCreditCardInfo } from "../actions/cartActions";
import Button from "@material-ui/core/Button";
import CheckoutSteps from "../components/CheckoutSteps";
import "./checkout.css";

export default function PaymentMethod(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { creditCardInfo } = cart;
  if (!shippingAddress.address && cart.deliveryMethod === "Ship") {
    props.history.push("/shipping");
  }

  const [holderName, setHolderName] = useState(creditCardInfo.holderName);
  const [cardNumber, setCardNumber] = useState(creditCardInfo.cardNumber);
  const [expiryDate, setExpiryDate] = useState(creditCardInfo.expiryDate);
  const [securityCode, setSecurityCode] = useState(creditCardInfo.securityCode);

  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(
      saveCreditCardInfo({ holderName, cardNumber, expiryDate, securityCode })
    );
    props.history.push("/placeorder");
  };
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
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form
        className="forminfo"
        onSubmit={submitHandler}
        style={{ height: "460px" }}
      >
        <div>
          <h1>Payment</h1>
        </div>
        <div className="subt decideinfo">
          <div>
            <input
              type="radio"
              id="creditcard"
              value="CreditCard"
              name="paymentMethod"
              //required
              checked={paymentMethod === "CreditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className="subt" htmlFor="creditcard">
              Credit Card
            </label>
          </div>
        </div>
        <div className="subt decideinfo">
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              //required
              checked={paymentMethod === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className="subt" htmlFor="paypal">
              PayPal
            </label>
          </div>
        </div>

        {paymentMethod === "CreditCard" ? (
          <div className="infoform">
            <div style={{ marginTop: "7%", marginBottom: "5%" }}>
              <h2>Credit Card Information </h2>
            </div>
            <div className="infodiv">
              <label
                className="infolable"
                htmlFor="holderName"
                style={{ paddingTop: "3%" }}
              >
                Card Holder
              </label>
              <input
                type="text"
                id="holderName"
                placeholder="Enter Holder Name"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  border: "1px solid #e9ddd0",
                  marginTop: "0",
                }}
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
                required
              ></input>
            </div>
            <div className="infodiv">
              <label
                className="infolable"
                htmlFor="cardNumber"
                style={{ paddingTop: "3%" }}
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter Card Number"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  border: "1px solid #e9ddd0",
                  marginTop: "0",
                }}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              ></input>
            </div>
            <div className="infodiv">
              <label
                className="infolable"
                htmlFor="expiryDate"
                style={{ paddingTop: "3%" }}
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="Enter Expiry Date"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  border: "1px solid #e9ddd0",
                  marginTop: "0",
                }}
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              ></input>
            </div>
            <div className="infodiv">
              <label
                className="infolable"
                htmlFor="securityCode"
                style={{ paddingTop: "3%" }}
              >
                Security Code
              </label>
              <input
                type="text"
                id="securityCode"
                placeholder="Enter Security Code"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  border: "1px solid #e9ddd0",
                  marginTop: "0",
                }}
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                required
              ></input>
            </div>
          </div>
        ) : (
          <div className="message">
            After clicking “Place order”, you will see PayPal button to complete
            your purchase securely.
          </div>
        )}
        <div>
          <Button
            className="checkbutton"
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
          >
            Continue to Order
          </Button>
        </div>
      </form>
    </div>
  );
}
