import React, { Component } from "react";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavigateComponent from "./NavigateComponent";
import styles from "./ex_layout.module.css";
export default class Ex_Layout extends Component {
  render() {
    return (
      <div className="">
        <p className={`${styles["title-color"]} ${styles.bgPrimary}`}>
          Hello header
        </p>
        <p className={styles.bgPrimary}>Demo background</p>
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
