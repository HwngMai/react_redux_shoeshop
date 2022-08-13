import React, { Component } from "react";
import Event_BindingEvent_Binding from "../Event_Binding/Event_Binding";

export default class RederWithMap extends Component {
  state = {
    phoneArr: [
      {
        name: "Sokoke",
        img: "http://loremflickr.com/640/480/technics",
        price: "106.00",
        id: "1",
      },
      {
        name: "American Bobtail",
        img: "http://loremflickr.com/640/480/technics",
        price: "127.00",
        id: "2",
      },
      {
        name: "Donskoy",
        img: "http://loremflickr.com/640/480/technics",
        price: "750.00",
        id: "3",
      },
      {
        name: "Somali",
        img: "http://loremflickr.com/640/480/technics",
        price: "369.00",
        id: "4",
      },
      {
        name: "British Shorthair",
        img: "http://loremflickr.com/640/480/technics",
        price: "535.00",
        id: "5",
      },
      {
        name: "Sphynx",
        img: "http://loremflickr.com/640/480/technics",
        price: "893.00",
        id: "6",
      },
      {
        name: "Russian Blue",
        img: "http://loremflickr.com/640/480/technics",
        price: "661.00",
        id: "7",
      },
      {
        name: "Ojos Azules",
        img: "http://loremflickr.com/640/480/technics",
        price: "147.00",
        id: "8",
      },
    ],
  };

  render() {
    return (
      <div>
        <p>RederWithMap</p>
        <div className="row">
          {this.state.phoneArr.map((item, index) => {
            return (
              <div
                key={index.toString() + item.id}
                className="card col-3"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={item.img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    {item.price}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
