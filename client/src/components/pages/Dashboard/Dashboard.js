import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Sidebar from "../../Sidebar/Sidebar";
import ProjectFeed from "../../ProjectFeed/ProjectFeed";
import ProjectModel from "../../ProjectModel/ProjectModel";
import { Provider } from "react-redux";
import store from "../../../store";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
    });
  }

  render() {
    return (
        <Provider store={store}>
      <div className="container-fluid pl-0">
        <Sidebar />
       
        <div>
          <h1>
            Welcome {this.state.first_name} {this.state.last_name}
          </h1>
          
            <div className="d-flex flex-row-reverse mr-5">
            
                <ProjectModel/>
                <ProjectFeed />
                
           
            </div>
         
        </div>
      </div>
      </Provider>
    );
  }
}

export default DashBoard;
