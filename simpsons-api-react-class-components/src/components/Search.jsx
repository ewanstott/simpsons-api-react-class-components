import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchTerm, onUserInput } = this.props;
    return (
      <>
        <div>
          <form onChange={onUserInput} value={searchTerm}>
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              placeholder="Enter character name..."
              id="search"
              className="input"
            />
            {/* <p>{this.state.errors && this.state.errors.search}</p> */}
          </form>
        </div>
      </>
    );
  }
}

export default Search;
