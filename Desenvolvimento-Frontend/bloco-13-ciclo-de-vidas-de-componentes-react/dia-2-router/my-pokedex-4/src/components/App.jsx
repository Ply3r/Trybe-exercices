import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokeContainer from "./pokeContainer";
import '../css/app.css';
import MoreInfo from "./MoreInfo";
import Favoritos from "./Favoritos";

class App extends Component {
  constructor(props) {
    super(props);
    this.importFavorite = this.importFavorite.bind(this)
    this.state = {
      favoritos: {},
    }
  }

  async importFavorite(name, bool) {
    const { favoritos } = this.state
    await this.setState((after) => after.favoritos[name] = bool)
    const objJson = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', objJson)
  }

  componentDidMount() {
    const itens = localStorage.getItem('favoritos')
    const obj = JSON.parse(itens)
    this.setState({ favoritos: obj })
  }

  render() {
    const { favoritos } = this.state;
    return (
      <>
      <h1>PokeIndex</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <PokeContainer favoritos={favoritos} /> } />
          <Route path="/moreInfo/:name" render={(props) => <MoreInfo {...props} importFavorite={this.importFavorite} favoritos={this.state.favoritos}/>} />
          <Route path="/favorite" render={(props) => <Favoritos favoritos={favoritos ? favoritos : ''} />} />
        </Switch>
      </ BrowserRouter>
      </>
    );
  }
}

export default App;