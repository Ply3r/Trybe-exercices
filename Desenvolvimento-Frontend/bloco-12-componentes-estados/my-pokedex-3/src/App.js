import React, { Component } from 'react'
import getApi from './pokeAPI';
import Pokemon from './pokemon';
import './app.css';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.makePokemon = this.makePokemon.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.searchChange = this.searchChange.bind(this);
    this.buscar = this.buscar.bind(this)
    this.state = {
      pokeIndex: 1,
      name: '',
      id: '',
      weight: '',
      sprite: '',
      tipos: '',
      search: '',
    }
  }

  prev() {
    if ( this.state.pokeIndex - 1 > 0 ) {
      const { pokeIndex } = this.state
      this.setState({ pokeIndex: pokeIndex - 1 })
    } else {
      this.setState({ pokeIndex: 898 })
    }
    this.makePokemon(this.state.pokeIndex);
  }

  next() {
    if (this.state.pokeIndex >= 898) {
      this.setState({ pokeIndex: 1 })
    } else {
      const { pokeIndex } = this.state
      this.setState({ pokeIndex: pokeIndex + 1 })
    }
    this.makePokemon(this.state.pokeIndex);
  }

  async makePokemon(index) {
    const { order, name, tipos, weight, front_default } = await getApi(index)
    this.setState({
      name,
      id: order,
      weight,
      sprite: front_default,
      tipos
    })
  }

  searchChange({ target }) {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  buscar() {
    let busca = this.state.search;
    busca = busca.toLowerCase();
    this.setState({search: ''})
    this.makePokemon(busca)
  }

  componentDidMount() {
    this.makePokemon(1)
  }

  render() {
    const { name, id, weight, sprite, tipos, search } = this.state

    return (
      <React.Fragment>
      <div className="pokecontainer">
        <button onClick={this.prev}>ᐸ</button>
        <Pokemon
          name={name}
          id={id}
          weight={`${weight}kg`}
          url={sprite}
          type={tipos}
        />
        <button onClick={this.next}>ᐳ</button>
      </div>
      <div className="busca">
        <Search 
        search={search}
        searchChange={this.searchChange}
        />
        <button onClick={this.buscar}>Buscar</button>
      </div>
      </React.Fragment>
    )
  }
}

export default App;