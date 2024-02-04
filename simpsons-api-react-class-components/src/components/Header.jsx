import React, { Component } from "react";
import "./HomerStyles.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="header">
          <h1>The Simpsons Quote Generator!</h1>
        </div>
        {/* <div className="homer-container">
          <div className="leftEye"></div>
          <div className="rightEye"></div>
          <div className="leftPupil"></div>
          <div className="rightPupil"></div>
          <div className="beard"></div>
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="x"></div>
          <div className="wrinkle"></div>
          <div id="yummyDonut">
            <div className="donut"></div>
            <div className="inner"></div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Header;
