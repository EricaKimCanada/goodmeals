import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MealPage from "./pages/MealPage";
import Navbar from "./components/navBar/Navbar";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Review from "./pages/PageReview";
import Keto from "./pages/Keto";
import Footer from "./components/footer/footer.js";
import Diets from "./pages/Diets";
import Paleo from "./pages/Paleo";
import Vegan from "./pages/Vegan";
import Vegetarian from "./pages/Vegetarian";
import Meals from "./pages/Meals";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderHistory from "./pages/OrderHistory";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ShippingAddress from "./pages/ShippingAddress";
import PaymentMethod from "./pages/PaymentMethod";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ paddingTop: "4%" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/pageReview" exact component={Review} />
          <Route path="/diets" exact component={Diets} />
          <Route path="/keto" exact component={Keto} />
          <Route path="/vegan" exact component={Vegan} />
          <Route path="/paleo" exact component={Paleo} />
          <Route path="/vegetarian" exact component={Vegetarian} />
          <Route path="/meals" exact component={Meals} />
          <Route path="/meals/:id" component={MealPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/orderhistory" exact component={OrderHistory} />
          <Route path="/cart/:id?" exact component={Cart} />
          <PrivateRoute
            path="/profile"
            exact
            component={Profile}
          ></PrivateRoute>
          <Route path="/shipping" exact component={ShippingAddress} />
          <Route path="/payment" exact component={PaymentMethod} />
          <Route path="/placeorder" exact component={PlaceOrder} />
          <Route path="/order/:id" exact component={Order} />
        </Switch>
      </div>
      <ContactUs></ContactUs>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
