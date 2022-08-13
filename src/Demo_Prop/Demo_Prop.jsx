import React, { Component } from "react";
import UserInfor_Props from "./UserInfor_Props";

export default class Demo_Prop extends Component {
  state = {
    username: "Alice",
    age: 2,
  };

  handleChangeName = (name) => {
    this.setState({ username: name });
  };

  render() {
    return (
      <div>
        <p>Demo_Prop</p>
        <UserInfor_Props
          userAge={this.state.age}
          username={this.state.username}
          handleChangeName={this.handleChangeName}
        />
      </div>
    );
  }
}
