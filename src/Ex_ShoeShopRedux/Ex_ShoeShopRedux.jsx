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
  // handleXemChiTiet = (idShoe) => {
  //   // c1
  //   let index = this.state.shoeArr.findIndex((item) => {
  //     return item.id == idShoe;
  //   });

  //   index !== -1 &&
  //     this.setState({
  //       detailShoe: this.state.shoeArr[index],
  //     });
  // };

  handleAddToCart = (shoe) => {
    let cloneGioHang = [...this.state.gioHang];

    let index = this.state.gioHang.findIndex((item) => {
      return item.id == shoe.id;
    });

    // th1 sản phẩm chưa có trong giỏi hàng
    if (index == -1) {
      let spGioHang = { ...shoe, soLuong: 1 };
      console.log("spGioHang: ", spGioHang);
      cloneGioHang.push(spGioHang);
    } else {
      // th2 sản phẩm đã có trong giỏi hàng
      // let sp = cloneGioHang[index];
      // // tăng số lượng sp lên 1 đơn vị
      // sp.soLuong++;
      // cloneGioHang[index] = sp;
      cloneGioHang[index].soLuong++;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  handleRemove = (idShoe) => {
    console.log("idShoe: ", idShoe);

    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idShoe;
    });
  };
  render() {
    // console.log(this.state.gioHang.length);

    return (
      <div>
        <GioHang
          handleRemove={this.handleRemove}
          gioHang={this.state.gioHang}
        />
        <ListShoe
          data={this.state.shoeArr}
          handleAddToCart={this.handleAddToCart}
        />
        <DetailShoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
