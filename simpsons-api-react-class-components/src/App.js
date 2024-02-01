import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";

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
      //Bring in data when available, other wise load spinner
      <>
        <Header />
        {this.state.character ? <Interface /> : <Spinner />}
        <Footer />
      </>
    );
  }
}

export default App;
