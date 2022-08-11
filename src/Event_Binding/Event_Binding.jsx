import React, { Component } from "react";

export default class Event_BindingEvent_Binding extends Component {
  //* function ko có tham số
  handleClickMe = () => {
    console.log("yes click");
  };
  // ** function có tham số
  handleSayHello = (name) => {
    console.log(name);
  };
  render() {
    return (
      <div>
        <p>Event_Binding</p>
        {/* anfn */}
        <button onClick={this.handleClickMe} className="btn btn-success">
          Click me
        </button>

        <button
          // bọc bằng arrow function
          onClick={() => {
            this.handleSayHello("Alice");
          }}
          className="btn btn-secondary"
        >
          Click to say hello
        </button>
      </div>
    );
  }
}
