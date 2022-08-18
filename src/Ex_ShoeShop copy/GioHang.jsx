import React, { Component } from "react";

export default class GioHang extends Component {
  renderTbody = () => {
    // if (this.props.gioHang.length == 0) {
    //   return (
    //     <p className="mt-5 text-center">Chưa có sản phẩm trong giỏi hàng</p>
    //   );
    // }
    return this.props.gioHang.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            {" "}
            <img src={item.image} style={{ width: 80 }} alt="" />
          </td>
          <td>
            <button className="btn btn-primary">-</button>
            <span className="mx-3">{item.soLuong}</span>
            <button className="btn btn-success">+</button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container py-5">
        {/* gioHang */}
        <table className="table text-left">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
            </tr>
          </thead>

          <tbody>{this.renderTbody()}</tbody>
        </table>

        {this.props.gioHang.length == 0 && (
          <p className=" mt-5 text-center">Chưa có sản phẩm trong giỏi hàng</p>
        )}
      </div>
    );
  }
}
