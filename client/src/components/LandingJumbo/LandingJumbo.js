import React, { Component } from "react";
import "../LandingJumbo/LandingJumbo.css"

class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-1 landingJumbo">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h1 className='d-flex justify-content-center companyName'>
                        <div className="sidebar-brand-icon rotate-n-15 mr-2">
                            <i className="fa fa-pagelines" />
                        </div> 
                        <div>GARDENING WORKSHOP</div>
                    </h1>
                    <h2 className='text-center companySlogan'>Create and manage your garden</h2>
                </div>
            </div>
        );
    } 
}

export default LandingJumbo;