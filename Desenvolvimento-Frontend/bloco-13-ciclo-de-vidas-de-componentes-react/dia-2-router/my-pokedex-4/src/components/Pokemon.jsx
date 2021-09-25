import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/pokemon.css'

class Pokemon extends Component {
  render() {
    const { obj, moreInfo } = this.props;
    return (
      <div className="poke-container">
        <div>
          <h2>Name: { obj.name }</h2>
          <h2>Type: { obj.type }</h2>
          <h2>Weight: { obj.averageWeight.value + obj.averageWeight.measurementUnit }</h2>
          {!moreInfo ? <Link to={`/moreInfo/${obj.name}`}><button className="link">More info</button></Link> : <Link to="/"><button className="link">Home</button></Link> }
        </div>
        <div className="imagem-container">
          <img src={obj.image} alt="pokemon" />
        </div>
      </div>
    );
  }
}

export default Pokemon