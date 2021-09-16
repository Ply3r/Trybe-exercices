import React, { Component } from "react";
import './search.css'

class Search extends Component {
  render() {
    const { search, searchChange } = this.props;
    return (
      <div>
        <h2>Buscar pokemon:</h2>
        <input autoComplete="off" id="search" type="text" name="search" value={search} onChange={searchChange} />
      </div>
    );
  }
}

export default Search;
