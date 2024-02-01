import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import Characters from "./components/Characters";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
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
    //This line is using destructuring to extract the simpsons property from the state object. It assumes that your component's state has a property named simpsons.
    const { simpsons } = this.state;

    return (
      // Bring in data when available, otherwise load spinner
      <>
        <Header />
        {simpsons ? (
          <>
            <Interface />
            <Characters simpsons={simpsons} />
          </>
        ) : (
          <Spinner />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
