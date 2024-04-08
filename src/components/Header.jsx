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
      </>
    );
  }
}

export default Header;
