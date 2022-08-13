import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";

export default class Ex_ShoeShop extends Component {
  state = {
    shoeArr: dataShoe,
  };
  render() {
    return (
      <div>
        <GioHang />
        <ListShoe data={this.state.shoeArr} />
      </div>
    );
  }
}
