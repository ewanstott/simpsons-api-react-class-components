import React, { Component } from "react";

//CHARACTER component for 1 character (name, quote, image & controls) - favourite & delete button
class Character extends Component {
  //   state = {};
  render() {
    // this.state.characters

    // Access the simpsons data from props
    const { simpsons, favourite, onToggleFavourite, onDeleteCharacter } =
      this.props;

    //Conditionally render a class based on favourite button clicked or not
    const favouriteButtonClass = favourite
      ? "favourite-button active"
      : "favourite-button";

    // Conditionally apply a class based on character direction --- to be finished
    const characterDirectionClass =
      simpsons.characterDirection === "Right" ? "right" : "left";

    // console.log(simpsons);
    // console.log(simpsons[1].character);
    // console.log(simpsons[1].characterDirection);
    // console.log(simpsons[1].image);
    // console.log(simpsons[1].quote);

    return (
      <div className={`character-card ${characterDirectionClass}`}>
        <div className="character-name">
          <h2>Name: {simpsons.character}</h2>
        </div>
        <div className="quote-image-container">
          <p>Quote: {simpsons.quote}</p>
          <img src={simpsons.image} alt={simpsons.character} />
        </div>

        <div className="controls">
          <button
            className={favouriteButtonClass}
            onClick={() => {
              onToggleFavourite(simpsons);
            }}
          >
            Favourite
          </button>
          <button
            className="delete-button"
            onClick={() => onDeleteCharacter(simpsons)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Character;
