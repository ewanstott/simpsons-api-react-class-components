import React, { Component } from "react";

//CHARACTER component for 1 character (name, quote, image & controls) - favourite & delete button
class Characters extends Component {
  //   state = {};
  render() {
    // this.state.characters

    // Access the simpsons data from props
    const { simpsons, onToggleFavourite, onDeleteCharacter, character } =
      this.props;

    // console.log(simpsons);
    // console.log(simpsons[1].character);
    // console.log(simpsons[1].characterDirection);
    // console.log(simpsons[1].image);
    // console.log(simpsons[1].quote);

    return (
      <div>
        <div className="character">
          <h2>Name: {simpsons.character}</h2>
          <p>Quote: {simpsons.quote}</p>
          <img src={simpsons.image} alt={simpsons.character} />
        </div>
        <>
          <button
            onClick={() => {
              onToggleFavourite(simpsons);
            }}
          >
            Favourite
          </button>
          <button onClick={() => onDeleteCharacter(character)}>Delete</button>
        </>
      </div>
    );
  }
}

export default Characters;
