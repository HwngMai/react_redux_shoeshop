import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";

export default class Ex_ShoeShopRedux extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
    gioHang: [],
  };

  render() {
    return (
      <div>
        <GioHang />
        <ListShoe
        // data={this.state.shoeArr}
        />
        <DetailShoe />
      </div>
    );
  }
}
