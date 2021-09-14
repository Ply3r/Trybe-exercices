import React, { Component } from 'react';
import data from './data'
import Pokemon from './pokemon';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.choseType = this.choseType.bind(this)
    this.makePokemons = this.makePokemons.bind(this)
    this.state = {
      pokeIndex: 0,
      limit: data.length - 1,
      type: 'All',
    }
  }

  prev() {
    if ( this.state.pokeIndex <= 0 ) {
      this.setState((after, props) => ({pokeIndex: after.pokeIndex = this.state.limit}))
    } else {
      this.setState((after, _props) => ({ pokeIndex: after.pokeIndex - 1 }));
    }
  }

  next() {
    if ( this.state.pokeIndex >= this.state.limit ) {
      this.setState((after, _props) => ({ pokeIndex: after.pokeIndex =  0 }))
    } else {
      this.setState((after, _props) => ({ pokeIndex: after.pokeIndex + 1 }))
    }
  }

  choseType() {
    const container = document.querySelector('.typeContainer');
    container.addEventListener('click', (e) => {
      if (e.target !== container) {
        if (e.target.innerText === 'All') {
          this.setState((after, _props) => ({
            pokeIndex: 0,
            limit: data.length - 1,
            type: 'All'
          }))
        } else {
          this.setState((after, _props) => ({
            pokeIndex: 0,
            limit: data.filter((pokemon) => pokemon.type === e.target.innerText).length - 1,
            type: after.type = e.target.innerText
          }))
        }
      }
    })
  }

  makePokemons() {
    if (this.state.type === 'All') {
      const { name, type, averageWeight, image, id } = data[this.state.pokeIndex];
      return (
        <Pokemon 
        name={name}
        type={type}
        weight={`${averageWeight.value} ${averageWeight.measurementUnit}`}
        url={image}
        id={id}
        />
      );
    } else {
      const filterType = data.filter((e) => e.type === this.state.type);
      const { name, type, averageWeight, image, id } = filterType[this.state.pokeIndex];
      return (
        <Pokemon 
        name={name}
        type={type}
        weight={`${averageWeight.value} ${averageWeight.measurementUnit}`}
        url={image}
        id={id}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="pokecontainer">
          <button onClick={this.prev}>ᐸ</button>
          <div>{this.makePokemons()}</div>
          <button onClick={this.next}>ᐳ</button>
        </div>
        <div className='typeContainer' onMouseEnter={this.choseType}>
          <button className="normal">All</button>
          <button className="fire">Fire</button>
          <button className="psychic">Psychic</button>
          <button className="dragon">Dragon</button>
          <button className="poison">Poison</button>
          <button className="electric">Electric</button>
          <button className="bug">Bug</button>
          <button className="normal">Normal</button>
        </div>
      </React.Fragment>
    )
  }
}

export default App;