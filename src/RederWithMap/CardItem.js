import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    return (
      <div className="card col-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={this.props.data.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {this.props.data.price}
          </a>
        </div>
      </div>
    );
  }
}
