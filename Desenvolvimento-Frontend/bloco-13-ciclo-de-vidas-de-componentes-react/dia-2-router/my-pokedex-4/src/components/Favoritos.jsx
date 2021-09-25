import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data'
import { Link } from "react-router-dom";

class Favoritos extends Component { 
  render() {
    const { favoritos } = this.props;
    const entries = Object.entries(favoritos)
    const pokemons = entries
      .filter((poke) => poke[1])
      .map((poke) => poke[0])
      .map((name) => {
        const obj = data.find((item) => item.name === name);
        return (
          <Pokemon obj={obj} />
        )
      })
    
    return (
      <>
        <div>
          { pokemons }
        </div>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Favoritos;
