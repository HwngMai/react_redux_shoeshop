import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
let btnStyle = {
  width: 150,
  height: 150,
  fontSize: 44,
};
class XucXac extends Component {
  render() {
    console.log(this.props.mangXucXac);
    let { mangXucXac } = this.props;
    return (
      <div className='container pt-5'>
        <div className='d-flex justify-content-around align-item-center '>
          <button style={btnStyle} className='btn btn-danger'>
            Tài
          </button>
          <div>
            {mangXucXac.map((item) => {
              return <img style={{ width: 100 }} src={item.img} />;
            })}
          </div>
          <button style={btnStyle} className='btn btn-secondary'>
            Xiểu
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  mangXucXac: state.xucXacReducer.mangXucXac,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps)(XucXac);
