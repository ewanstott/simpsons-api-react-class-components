import React, { Component } from "react";

class Sort extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <select id="sortOrder" onChange={(e) => onChange(e.target.value)}>
          <option value="alphaAsc">Ascending</option>
          <option value="alphaDesc">Descending</option>
        </select>
      </div>
    );
  }
}

export default Sort;
