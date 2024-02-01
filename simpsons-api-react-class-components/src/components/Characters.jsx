import React, { Component } from "react";

class Characters extends Component {
  state = {};
  render() {
    // let count = 0;
    // this.state.characters

    // Access the simpsons data from props
    const { simpsons } = this.props;

    console.log(simpsons);
    console.log(simpsons[1].character);
    console.log(simpsons[1].characterDirection);
    console.log(simpsons[1].image);
    console.log(simpsons[1].quote);

    return <>{/* <p>Characters Favourited: {count}</p> */}</>;
  }
}

export default Characters;
