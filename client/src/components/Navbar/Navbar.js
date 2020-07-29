import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav list-group list-group-horizontal justify-content-end">
        <li>
          <Link className="btn btn-sm active mr-1 mb-1" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="btn btn-sm active" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );
    const userLink = (
      <ul className="navbar-nav">
        <li className="flex-grow-1 nav-item active">
          <Link className="navbar-brand btn btn-sm active mr-5 mb-1" to="/">
            <div>
              <i className="fa fa-pagelines sidebar-brand-icon rotate-n-15 fa-2" />
              Gardening Workshop
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-sm active mr-1 mb-1" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-sm active mr-1 mb-1" to="/profile">
            Profile
          </Link>
        </li>

        <li className="nav-item">
          {/* <a href="/" rel='noopener noreferrer' onClick={this.logOut.bind(this)}>
                        Logout
                    </a> */}
          <button
            className="btn btn-sm active"
            id="logoutBtn"
            data-toggle="modal"
            data-target="#logoutModal"
            onClick={this.logOut.bind(this)}
          >
            <div>Logout</div>
          </button>
        </li>
      </ul>
    );
    return (
      <nav className="navbar sticky-top navbar-expand-lg">
        <div
          className="collapse navbar-collapse d-flex justify-content-start"
          id="navbar1"
        >
          <button
            class="navbar-toggler navbar-light bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
