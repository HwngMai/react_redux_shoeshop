import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    return (
      <div className=" container">
        <div className="row">
          {this.props.data.map((item, index) => {
            return (
              <div className="col-3">
                <ItemShoe detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
