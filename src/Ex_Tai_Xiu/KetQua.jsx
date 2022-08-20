import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAY_GAME } from "./xucXacConstants/xucXacConstants";

class KetQua extends Component {
  render() {
    return (
      <div onClick={this.props.handlePlayGame} className='text-center pt-5 '>
        <button className='btn btn-success'>
          <span className='display-3'>Chơi khô máu !</span>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: PLAY_GAME,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
