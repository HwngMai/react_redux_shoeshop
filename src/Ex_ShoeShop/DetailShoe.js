import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { image } = this.props.detailShoe;
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img src={image} alt="" className="w-100" />
          </div>
        </div>
      </div>
    );
  }
}
