import React, { Component } from "react";
import { connect } from "react-redux";
import { tangSoLuongAction } from "./redux/actions/numberAction";
import { TANG_SO_LUONG } from "./redux/constants/numberConstants";
class DemoReduxMini extends Component {
  render() {
    return (
      <div className="text-center py-5">
        <button
          onClick={() => {
            this.props.giamSoLuong(10);
          }}
          className="btn btn-danger"
        >
          -
        </button>

        <span className="display-4 text-secondary mx-3">
          {this.props.number}
        </span>

        <button onClick={this.props.tangSoLuong} className="btn btn-warning">
          +
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  // mapStateToProps lấy dữ liệu về dưới dạng props
  return {
    number: state.number.soLuong,
    isLogin: state.number.isLogin,
  };
};
let mapDispatchToProps = (dispatch) => {
  // mapDispatchToProps đẩy dữ liệu lên store

  return {
    tangSoLuong: () => {
      dispatch(tangSoLuongAction());
    },
    giamSoLuong: (value) => {
      let action = {
        type: "GiamSoLuong",
        payload: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoReduxMini);
