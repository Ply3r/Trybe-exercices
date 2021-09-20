import React, { Component } from "react";
import MovieSection from "./movieSection";


import './movieList.css'

class MovieList extends Component {
  render() {
    const { types, search } = this.props;
    return (
      <section>
        <MovieSection types={types} search={search} title="Top rated:" page={Math.floor(Math.random() * 10)} />
        <MovieSection types={types} search={search} title="You might like:" page={Math.floor(Math.random() * 10)} />
        <MovieSection types={types} search={search} title="Others like'd:" page={Math.floor(Math.random() * 10)} />
        <MovieSection types={types} search={search} title="More films:" page={Math.floor(Math.random() * 10)} />
      </section>
    );
  }
}

export default MovieList;
