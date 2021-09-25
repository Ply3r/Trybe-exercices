import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data'
import { Link } from "react-router-dom";

class PokeContainer extends Component {
  constructor(props) {
    super(props)
    this.changePokeIndex = this.changePokeIndex.bind(this)
    this.state = {
      pokeIndex: 0,
      favoritos: [],
    }
  }

  changePokeIndex({ target }) {
    const { pokeIndex } = this.state;
    const { name } = target;
    if(name === 'prev') {
      pokeIndex > 0 
      ? 
        this.setState({ pokeIndex: pokeIndex - 1 }) 
      : 
        this.setState({ pokeIndex: data.length - 1 })
    } else {
      pokeIndex < data.length - 1 
      ? 
        this.setState({ pokeIndex: pokeIndex + 1 }) 
      : 
        this.setState({ pokeIndex: 0 })
    }
  }

  render() {
    const { pokeIndex } = this.state;
    const pokemon = data[pokeIndex];
    return (
      <>
      <div>
        <button name="prev" onClick={this.changePokeIndex}>Prev</button>
        <Pokemon obj={pokemon} />
        <button name="next" onClick={this.changePokeIndex}>Next</button>
      </div>
      <Link to="/favorite" >Favoritos</Link>
      </>
    )
  }
}

export default PokeContainer;
