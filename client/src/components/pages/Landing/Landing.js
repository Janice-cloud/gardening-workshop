import React, { Component } from "react";
import "./style.css";
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
import BrandDescription from "../../BrandDescription/BrandDescription";

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <div className="d-flex justify-content-center backgroundImg">
          <LandingJumbo />
        </div>
        <div className="footer-background">
        <BrandDescription />
        </div>
      </div>
    );
  }
}

export default Landing;
