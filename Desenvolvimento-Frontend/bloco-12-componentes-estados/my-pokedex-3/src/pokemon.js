import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'


class Pokemon extends Component {
  render() {
    const { name, type, weight, url, id } = this.props;

    const tipos = type.split(' ').map((tipo) => (
      <span className={tipo}>{tipo}</span>
    ))


    return(
    <div className="poke-container" id={id}>
      <div>
        <h2>Nome: {name}</h2>
        <h2>Tipo: {tipos}</h2>
        <h2>Peso médio: {weight}</h2>
        <h2>Order: {id}</h2>
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