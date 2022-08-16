import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";

export default class Ex_ShoeShop extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
  };
  handleXemChiTiet = (shoe) => {
    this.setState({
      detailShoe: shoe,
    });
  };
  render() {
    return (
      <div>
        <GioHang />
        <ListShoe data={this.state.shoeArr} />
        <DetailShoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
