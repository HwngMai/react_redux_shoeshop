import React, { Component } from "react";

export default class Data_Binding extends Component {
  title = "Vui quá";
  render() {
    let cardStyle = { width: "18rem" };
    let imgSrc = "https://picsum.photos/200";
    return (
      <div>
        <div className="card" style={cardStyle}>
          <img className="card-img-top" src={imgSrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
