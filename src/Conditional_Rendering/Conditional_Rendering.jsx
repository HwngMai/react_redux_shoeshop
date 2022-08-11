import React, { Component } from "react";

export default class Conditional_Rendering extends Component {
  isLogin = true;
  renderContent = () => {
    if (this.isLogin) {
      return (
        <div>
          <p>Hello user</p>
          <button onClick={this.handleLogout} className="btn btn-warning">
            {" "}
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Please Login</p>
          <button className="btn btn-success"> Login</button>
        </div>
      );
    }
  };

  handleLogout = () => {
    this.isLogin = false;
    console.log("this.isLogin", this.isLogin);
  };

  render() {
    return (
      <div>
        <p>Conditional_Rendering</p>
        {this.renderContent()}
      </div>
    );
  }
}
