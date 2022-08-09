import React, { Component } from "react";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavigateComponent from "./NavigateComponent";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div className="">
        <HeaderComponent />
        <div className="row">
          <div className="col-4">
            <NavigateComponent />
          </div>
          <div className="col-8">
            <ContentComponent />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
