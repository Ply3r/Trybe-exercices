import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'


class Pokemon extends Component {
  render() {
    const { name, type, weight, url, id } = this.props;

    return(
    <div className="poke-container" id={id}>
      <div>
        <h2>Nome: {name}</h2>
        <h2>Tipo: <span class={type}>{type}</span></h2>
        <h2>Peso médio: {weight}</h2>
      </div>
      <div>
        <img src={url} alt={'pokemon ' + name}/>
      </div>
    </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  url: PropTypes.string
}

export default Pokemon;