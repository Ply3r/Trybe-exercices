import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Favoritos extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.state = {
      position: -1000,
    }
  }

  next() {
    const { position } = this.state;
    if (this.state.position > 430) {
      this.setState({ position: 1050 })
    } else {
      this.setState({ position: position + 720 })
    }
  }

  prev() {
    const { position } = this.state;
    if (this.state.position < -380) {
      this.setState({ position: -1000 })
    } else {
      this.setState({ position: position - 720 })
    }
  }

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
        <button className="prevNext absolute left"  onClick={this.prev} ><FontAwesomeIcon icon={faAngleLeft} /></button>
        <button className="prevNext absolute right" onClick={this.next} ><FontAwesomeIcon icon={faAngleRight} /></button>
        <div className="flex-container" style={{right: this.state.position}}>
          { pokemons }
        </div>
        <div className="container favorito">
          <Link to="/"><button className="link">Home</button></Link>
        </div>
      </>
    );
  }
}

export default Favoritos;
