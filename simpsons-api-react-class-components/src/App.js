import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    //put data in state
    this.setState({ simpsons: data });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        {this.state.character ? <Interface /> : <Spinner />}
        <Footer />
      </>
    );
  }
}

export default App;
