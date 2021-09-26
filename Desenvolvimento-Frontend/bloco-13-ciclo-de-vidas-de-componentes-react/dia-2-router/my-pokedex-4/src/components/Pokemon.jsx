import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/pokemon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'

class Pokemon extends Component {
  render() {
    const { obj, moreInfo, fav } = this.props;
    let color = 'white'
    if (fav) {
      color = 'yellow'
    }
    return (
      <div className="poke-container">
        <div className="star" style={{color:`${color}`}}><FontAwesomeIcon icon={faStar} /></div>
        <div className="container-informations">
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
      </div>
    );
  }
}

export default Pokemon