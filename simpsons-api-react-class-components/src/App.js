import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import Characters from "./components/Characters";
import "./App.css";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Joi from "joi";

// data = simpsons
// simpsons.character

class App extends Component {
  // state = {};
  state = {
    simpsons: [],
    searchTerm: "",
    sortOrder: "alphaAsc",
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

  // schema = { search: Joi.string().min(3).max(10) };

  //Event handler for input - updates searchTerm property in components state
  handleUserInput = async (e) => {
    this.setState({ searchTerm: e.target.value });
    // console.log(e.target.value);
    // console.log(e.target.id);

    // const _joiInstance = Joi.object(this.schema);
    const _joiInstance = Joi.object({ search: Joi.string().min(3).max(10) });

    try {
      await _joiInstance.validateAsync({ search: this.state.searchTerm });

      // Clear errors when input is valid
      this.setState({ errors: null });
    } catch (e) {
      // console.log(e);

      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });

      console.log(errorsMod);
      //Put errors upstairs in the state:
      this.setState({ errors: errorsMod });
    }
  };

  //send toggle function a character, it finds it in the parent, it toggles it and then passes it back down into the child
  onToggleFavourite = (clickedCharacter) => {
    const index = this.state.simpsons.findIndex(
      (character) => character === clickedCharacter
    );
    const characters = [...this.state.simpsons]; //create variable -> array that holds the Simpsons characters
    characters[index].favourite = !characters[index].favourite;
    this.setState({ simpsons: characters }); //send names back upstairs
  };

  onDeleteCharacter = (deletedCharacter) => {
    const characters = [...this.state.simpsons];
    const index = characters.findIndex(
      (character) => character.character === deletedCharacter.character
    );
    characters.splice(index, 1);
    this.setState({ simpsons: characters });
  };

  handleSortOrderChange = (order) => {
    this.setState({ sortOrder: order });
  };

  sortCharacters = (characters) => {
    const { sortOrder } = this.state;
    const sortedCharacters = [...characters]; //create a copy of array

    switch (sortOrder) {
      case "alphaAsc":
        // console.log("alphaAsc");
        sortedCharacters.sort((a, b) => {
          if (a.character > b.character) {
            return 1;
          }
          if (a.character < b.character) {
            return -1;
          }
          return 0;
        });
        break;

      case "alphaDesc":
        // console.log("alphaDesc");
        sortedCharacters.sort((a, b) => {
          if (a.character > b.character) {
            return -1;
          }
          if (a.character < b.character) {
            return 1;
          }
          return 0;
        });
        break;

      default:
        console.log("Error");
        break;
    }
    return sortedCharacters;
  };

  render() {
    // console.log(this.setState);
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
    const { simpsons, searchTerm } = this.state;
    // const { simpsons, searchTerm, sortOrder } = this.state;

    const filteredCharacters = simpsons.filter((character) =>
      character.character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(filteredSimpson);

    // Sort the filtered characters based on the selected sort order
    const sortedCharacters = this.sortCharacters(filteredCharacters);
    // const sortedCharacters = this.sortCharacters(sortOrder, filteredCharacters);

    return (
      // Bring in data when available, otherwise load spinner
      <>
        <Header />
        <Search searchTerm={searchTerm} onUserInput={this.handleUserInput} />
        <p>{this.state.errors && this.state.errors.search}</p>
        <Sort onChange={this.handleSortOrderChange} />
        <p className="count">Characters Favourited: {count}</p>
        {simpsons ? (
          <>
            <Interface />
            {sortedCharacters.map((character, index) => {
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
        {/* </div> */}
        <Footer />
      </>
    );
  }
}

export default App;
