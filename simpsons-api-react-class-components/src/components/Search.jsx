import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchTerm, onSearchChange } = this.props;
    return (
      <>
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

// const Search = ({ onSearchChange }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Search Simpsons characters..."
//       onChange={(e) => onSearchChange(e.target.value)}
console.log(e.target.value);
//     />
//   );
// };
