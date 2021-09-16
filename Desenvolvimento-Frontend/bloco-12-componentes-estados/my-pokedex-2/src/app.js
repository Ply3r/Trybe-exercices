import React, { Component } from 'react';
import data from './data'
import Pokemon from './pokemon';
import './app.css'

class App extends Component {
  constructor() {
    super();
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
      this.setState({ pokeIndex: this.state.limit });
    } else {
      this.setState((after, _props) => ({ pokeIndex: after.pokeIndex - 1 }));
    }
  }

  next() {
    if ( this.state.pokeIndex >= this.state.limit ) {
      this.setState({ pokeIndex: 0 });
    } else {
      this.setState((after, _props) => ({ pokeIndex: after.pokeIndex + 1 }))
    }
  }

  choseType(event) {
    const container = document.querySelector('.typeContainer');
    if (event.target !== container) {
      if (event.target.innerText === 'All') {
        this.setState({
          pokeIndex: 0,
          limit: data.length - 1,
          type: 'All'
        })
      } else {
        const { length } = data.filter((pokemon) => pokemon.type === event.target.innerText);
        this.setState({
          pokeIndex: 0,
          limit: length - 1,
          type: event.target.innerText
        })
      }
    } 
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
          <div className="box">{this.makePokemons()}</div>
          <button onClick={this.next}>ᐳ</button>
        </div>
        <div className='typeContainer' onClick={this.choseType}>
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