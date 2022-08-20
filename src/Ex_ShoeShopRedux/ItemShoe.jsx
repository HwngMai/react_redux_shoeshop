import React, { Component, Fragment } from "react";

export default class ItemShoe extends Component {
  render() {
    let { name, image } = this.props.detail;
    return (
      <Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.detail);
              }}
              className="btn btn-secondary"
            >
              Add to cart
            </button>

            <button
              onClick={() => {
                this.props.handleViewDetail(this.props.detail.id);
              }}
              className="btn btn-warning"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
