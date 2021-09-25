import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class PokeContainer extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.state = {
      pokeIndex: 0,
      favoritos: [],
    }
  }

  prev() {
    const { pokeIndex } = this.state;
    pokeIndex > 0 
    ? 
      this.setState({ pokeIndex: pokeIndex - 1 }) 
    : 
      this.setState({ pokeIndex: data.length - 1 })
  }

  next() {
    const { pokeIndex } = this.state;
    pokeIndex < data.length - 1 
    ? 
      this.setState({ pokeIndex: pokeIndex + 1 }) 
    : 
      this.setState({ pokeIndex: 0 })
  }

  render() {
    const { pokeIndex } = this.state;
    const pokemon = data[pokeIndex];
    return (
      <>
      <div className="container">
        <button className="prevNext" name="prev" onClick={this.prev}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <Pokemon obj={pokemon} />
        <button className="prevNext" name="next" onClick={this.next}><FontAwesomeIcon icon={faAngleRight} /></button>
      </div>
      <div className="container favorito">
        <Link to="/favorite" ><button className="link">Favoritos</button></Link>
      </div>
      </>
    )
  }
}

export default PokeContainer;
