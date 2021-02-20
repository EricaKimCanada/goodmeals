import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./AboutUs.css";

const mapS = {
  width: "45%",
  height: "25%",
};

class AboutUs extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/images/marbleimg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "5%",
          marginTop: "-2%",
          paddingBottom: "3%",
          height: "100%",
        }}
      >
        <div className="main">
          <h1>About us</h1>
          <p>
            Our goal statement : Everyone can enjoy healthy food simply and
            easily.
          </p>
          <p>
            This site started in 2010 by Frank Smith, who enjoyed to cook, eat
            and share with people. Today We are analyzing and creating new
            recipes and milk kits for those who are interested in meal kits as a
            team. For those who are new to cooking or are struggling, we put a
            lot of effort into our recipes and meal kits. We always hope that
            consumers who order the meal kit will be interested in cooking as
            well as eating for healthy.
          </p>
          <p>
            In ingredient selection, we use local ingredients in London to
            contribute to the development of the local economy and strive to
            deliver good products to consumers.
          </p>
          <div className="location">
            <h1>Location</h1>
            <div className="info">
              <h4>Address</h4>
              <p>130 Dundas Street London ON N6A 1G2</p>
              <h4>Tel</h4>
              <p>519-452-4430</p>
            </div>
            <div></div>
            <div className="map">
              <Map
                google={this.props.google}
                zoom={15}
                style={mapS}
                initialCenter={{
                  lat: 42.983798,
                  lng: -81.251109,
                }}
              >
                <Marker position={{ lat: 42.983798, lng: -81.251109 }} />
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBTMFbIiSvt9w7rB1-dMW7KQdM76HS0gdk",
})(AboutUs);
