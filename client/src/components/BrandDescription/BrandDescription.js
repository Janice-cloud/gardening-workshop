import React, { Component } from "react";
import "../BrandDescription/BrandDescription.css"


class BrandDescription extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row m-0 p-0">

                    <div className="cardBackground col-xs-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title text-light">Follow Us!</h5>
                            <a href="https://www.facebook.com/janice.leung.731135" target="_blank">
                                <span className="fa-stack facebookLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/GardeningWorks1" target="_blank">
                                <span className="fa-stack twitterLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/gardeningworkshop/" target="_blank">
                                <span className="fa-stack instagramLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/gardening-workshop-3187691b3/" target="_blank">
                                <span className="fa-stack linkedinLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack googleLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-google fa-stack-1x"></i>
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandDescription;