import React, { Component } from "react";
import "./HomerStyles.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>The Simpsons</h1>
        <div className="homer-container">
          <div>
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
          </div>
        </div>
      </>
    );
  }
}

export default Header;
