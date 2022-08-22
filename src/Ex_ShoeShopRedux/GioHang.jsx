import React, { Component } from "react";
import { connect } from "react-redux";
class GioHang extends Component {
  renderTbody = () => {
    // Nếu gioHang có key thì mới render
    if (this.props.gioHang.length !== 0) {
      console.log("this.props.gioHang.length: ", this.props.gioHang.length);
      return this.props.gioHang.map((spGioHang, index) => {
        return (
          <tr key={index}>
            <td>{spGioHang.name}</td>
            <td>{spGioHang.price}</td>
            <td>
              {" "}
              <img src={spGioHang.image} style={{ width: 80 }} alt='' />
            </td>
            <td>
              <button className='btn btn-primary'>-</button>
              <span className='mx-3'>{spGioHang.soLuong}</span>
              <button className='btn btn-success'>+</button>
            </td>
            <td>
              <button
                onClick={() => {
                  this.props.handleRemove(spGioHang.id);
                }}
                className='btn btn-danger'>
                Xoá
              </button>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className='container py-5'>
        {/* gioHang */}
        <table className='table text-left'>
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
          <p className=' mt-5 text-center'>Chưa có sản phẩm trong giỏ hàng</p>
        )}
      </div>
    );
  }
}
// mapStateToProps lấy dữ liệu từ store về
let mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};
export default connect(mapStateToProps)(GioHang);
