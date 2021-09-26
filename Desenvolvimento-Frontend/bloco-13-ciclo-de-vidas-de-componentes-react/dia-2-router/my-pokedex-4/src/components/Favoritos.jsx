import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data'
import { Link, Redirect } from "react-router-dom";


class Favoritos extends Component {
  render() {
    const { favoritos } = this.props;
    const entries = Object.entries(favoritos)
    const pokemons = entries
      .filter((poke) => poke[1])
      .map((poke) => poke[0])
      .map((name) => {
        const obj = data.find((item) => item.name === name);
        let fav = false;
        if(obj.name === name) {
          fav = true
        }
        return (
          <Pokemon obj={obj} fav={fav}/>
        )
      })
    return (
      <>
        <div className="grid-container">
          { pokemons.length ? pokemons : <Redirect to="/" />}
        </div>
        <div className="container favorito">
          <Link to="/"><button className="link">Home</button></Link>
        </div>
      </>
    );
  }
}

export default Favoritos;
