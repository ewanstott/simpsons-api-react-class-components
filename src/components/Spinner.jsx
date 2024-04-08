import React, { Component } from "react";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="lds-circle">
          <div></div>
        </div>
      </>
    );
  }
}

export default Spinner;
