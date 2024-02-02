import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchTerm, onSearchChange } = this.props;
    return (
      <>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          type="text"
          placeholder="Enter character name..."
          value={searchTerm}
          onChange={onSearchChange}
          id="search"
        />
      </>
    );
  }
}

export default Search;
