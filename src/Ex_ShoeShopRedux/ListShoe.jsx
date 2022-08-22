import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";
import { ADD_TO_CART } from "./constants/shoeConstants";
export default class ListShoe extends Component {
  render() {
    return (
      <div className=' container'>
        <div className='row'>
          {this.props.data.map((item, index) => {
            return (
              <div className='col-3' key={index}>
                <ItemShoe detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
//Xây dựng hàm
