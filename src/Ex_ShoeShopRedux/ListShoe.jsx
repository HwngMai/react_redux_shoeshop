import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";
class ListShoe extends Component {
  render() {
    return (
      <div className=' container'>
        <div className='row'>
          {this.props.shoeArr.map((item, index) => {
            return (
              <div className='col-3' key={index}>
                <ItemShoe item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
// mapStateToProps lấy dữ liệu từ store về
let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};
//Xây dựng hàm
export default connect(mapStateToProps)(ListShoe);
