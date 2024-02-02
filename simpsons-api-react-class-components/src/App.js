import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import Characters from "./components/Characters";
import "./App.css";

// data = simpsons
// simpsons.character

class App extends Component {
  // state = {};
  state = {
    simpsons: [],
    searchTerm: "",
  };

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

  //send toggle function a character, it finds it in the parent, it toggles it and then passes it back down into the child
  onToggleFavourite = (character) => {
    const index = this.state.simpsons.findIndex(
      (character) => character === character
    );
    const characters = [...this.state.simpsons]; //create variable -> array that holds the Simpsons characters
    characters[index].favourite = !characters[index].favourite;
    this.setState({ simpsons: characters }); //send names back upstairs
  };

  onDeleteCharacter = (character) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((character) => character === character);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  render() {
    let count = 0;
    // optional chaining '?'
    this.state.simpsons?.forEach((character) => {
      if (character.favourite) count++;
    });

    //can also use conditional rendering:
    // this.state.simpsons &&
    //   this.state.simpsons.forEach((character) => {
    //     if (character.favourite) count++;
    //   });

    //This line is using destructuring to extract the simpsons property from the state object. It assumes that your component's state has a property named simpsons.
    const { simpsons } = this.state;

    return (
      // Bring in data when available, otherwise load spinner
      <>
        <Header />
        <div className="characters-container">
          <p>Characters Favourited: {count}</p>
          {simpsons ? (
            <>
              <Interface />
              {simpsons.map((character, index) => {
                //make a seperate component here? And map in a Character component?
                return (
                  <Characters
                    key={index}
                    simpsons={character}
                    favourite={character.favourite}
                    onToggleFavourite={this.onToggleFavourite}
                    onDeleteCharacter={this.onDeleteCharacter}
                  />
                );
              })}
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
