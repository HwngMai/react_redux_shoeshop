import React, { Component } from "react";
import { connect } from "react-redux";
import { MINUS_PLUS_ITEM, REMOVE_ITEM } from "./constants/shoeConstants";
class GioHang extends Component {
  renderTbody = () => {
    // Nếu gioHang có key thì mới render
    if (this.props.gioHang.length !== 0) {
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
              <button
                onClick={() => {
                  this.props.handleMinusPlus(index, false);
                }}
                className='btn btn-primary'>
                -
              </button>
              <span className='mx-3'>{spGioHang.soLuong}</span>
              <button
                onClick={() => {
                  this.props.handleMinusPlus(index, true);
                }}
                className='btn btn-success'>
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  this.props.handleRemoveGioHang(index);
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

let mapDispatchToProps = (dispatch) => {
  return {
    // Gọi func tăng giảm số lượng
    handleMinusPlus: (index, changeType) => {
      dispatch({
        type: MINUS_PLUS_ITEM,
        index,
        changeType,
      });
    },
    // Gọi func xóa item
    handleRemoveGioHang: (index) => {
      dispatch({
        type: REMOVE_ITEM,
        index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
