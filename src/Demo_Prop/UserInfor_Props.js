import React, { Component } from "react";

export default class UserInfor_Props extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>UserInfor_Props</p>

        <h2>Username : {this.props.username}</h2>

        <h3>Age : {this.props.userAge}</h3>

        <button
          onClick={() => {
            this.props.handleChangeName("Tom");
          }}
          // anfn
          className="btn btn-danger"
        >
          Change name
        </button>
      </div>
    );
  }
}
