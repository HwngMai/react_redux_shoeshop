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
  handleXemChiTiet = (idShoe) => {
    // c1
    let index = this.state.shoeArr.findIndex((item) => {
      return item.id == idShoe;
    });

    index !== -1 &&
      this.setState({
        detailShoe: this.state.shoeArr[index],
      });
  };
  render() {
    return (
      <div>
        <GioHang />
        <ListShoe
          data={this.state.shoeArr}
          handleXemChiTiet={this.handleXemChiTiet}
        />
        <DetailShoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
