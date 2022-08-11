import React, { Component } from "react";

export default class Demo_State extends Component {
  state = {
    isLogin: true,
    usename: "alice",
    soLuong: 1,
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };
  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  handleIncrease = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  render() {
    // this.state.soLuong++
    return (
      <div>
        {this.state.isLogin ? (
          <button onClick={this.handleLogout} className="btn btn-success">
            Logout
          </button>
        ) : (
          <button onClick={this.handleLogin} className="btn btn-warning">
            Login
          </button>
        )}

        {/* tăng giảm số lượng */}
        <div className="mt-5">
          <button className="btn btn-secondary">-</button>

          <span>{this.state.soLuong}</span>

          <button onClick={this.handleIncrease} className="btn btn-warning">
            +
          </button>
        </div>
      </div>
    );
  }
}
