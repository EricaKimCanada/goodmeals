import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { saveDeliveryMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Button from "@material-ui/core/Button";
import "./checkout.css";

export default function ShippingAddress(props) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push("/login");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [province, setProvince] = useState(shippingAddress.province);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [phone, setPhone] = useState(shippingAddress.phone);

  const [deliveryMethod, setDeliveryMethod] = useState("Ship");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        province,
        postalCode,
        phone,
      })
    );
    dispatch(saveDeliveryMethod(deliveryMethod));
    props.history.push("/payment");
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
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div style={{ height: "610px" }} className="forminfo">
        <div>
          <h1 style={{ marginLeft: "4%" }}>Delivery Information</h1>
        </div>

        <span
          style={{
            height: "5px",
            width: "175px",
            backgroundColor: "olivedrab",
            display: "block",
            margin: "auto",
            marginRight: "30%",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        ></span>

        <div className="subt">
          <h2>Delivery Method </h2>
        </div>

        <div className="subt decideinfo">
          <div>
            <input
              type="radio"
              id="ship"
              value="Ship"
              name="deliveryMethod"
              checked={deliveryMethod === "Ship"}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            ></input>
            <label className="subt" htmlFor="ship">
              Ship
            </label>
          </div>
        </div>
        <div className="subt decideinfo">
          <div>
            <input
              type="radio"
              id="pickup"
              value="Pickup"
              name="deliveryMethod"
              checked={deliveryMethod === "Pickup"}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            ></input>
            <label className="subt" htmlFor="pickup">
              Pick Up
            </label>
          </div>
        </div>

        <form className="infoform" onSubmit={submitHandler}>
          {deliveryMethod === "Ship" ? (
            <div>
              <div style={{ marginBottom: "6%" }}>
                <h2>Shipping Address </h2>
              </div>
              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="fullName"
                  style={{ paddingTop: "3%" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="address"
                  style={{ paddingTop: "3%" }}
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></input>
              </div>
              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="city"
                  style={{ paddingTop: "3%" }}
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                ></input>
              </div>

              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="province"
                  style={{ paddingTop: "3%" }}
                >
                  Province
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                >
                  <option key="ON" value="ON">
                    ON
                  </option>
                  <option key="NL" value="NL">
                    NL
                  </option>
                  <option key="PE" value="PE">
                    PE
                  </option>
                  <option key="NS" value="NS">
                    NS
                  </option>
                  <option key="NB" value="NB">
                    NB
                  </option>
                  <option key="QC" value="QC">
                    QC
                  </option>
                  <option key="MB" value="MB">
                    MB
                  </option>
                  <option key="SK" value="SK">
                    SK
                  </option>
                  <option key="AB" value="AB">
                    AB
                  </option>
                  <option key="BC" value="BC">
                    BC
                  </option>
                  <option key="YT" value="YT">
                    YT
                  </option>
                  <option key="NT" value="NT">
                    NT
                  </option>
                  <option key="NU" value="NU">
                    NU
                  </option>
                </select>
              </div>

              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="postalCode"
                  style={{ paddingTop: "3%" }}
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter postal code"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                ></input>
              </div>
              <div className="infodiv">
                <label
                  className="infolable"
                  htmlFor="phone"
                  style={{ paddingTop: "3%" }}
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter phone"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></input>
              </div>
            </div>
          ) : (
              <div className="message">
                <h2>Pickup - pickup location</h2>
                <div style={{ paddingLeft: "1em" }}>
                  <p>GoodMeals</p>
                  <p>130 Dundas Street, London N6A 1G2</p>
                  <p>phone: 519) 452-4430</p>
                </div>
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
              Continue To Payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
