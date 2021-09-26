import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from '../data';

class MoreInfo extends Component {
  constructor(props) {
    super(props)
    this.favoritar = this.favoritar.bind(this)
    this.state = {
      favorite: false,
    }
  }

  async favoritar() {
    const { name } = this.props.match.params;
    const { importFavorite } = this.props;
    await this.setState((after) => ({ favorite: !after.favorite }))
    this.state.favorite ? importFavorite(name, true) : importFavorite(name, false)
  }


  render() {
    const { name } = this.props.match.params;
    const obj = data.find((poke) => poke.name === name);
    const locations = obj.foundAt.map((obj) => (
      <div>
        <img src={obj.map} alt="location" />
        <h2>{ obj.location }</h2>
      </div>
    ))
    const { favoritos } = this.props;
    let fav = false;
    if (favoritos[name]) {
      fav = true;
    }
    return (
      <>
      <Pokemon obj={obj} fav={fav} moreInfo={true}/>
      <div className="container favoritar">
        <input type="checkbox" onChange={this.favoritar} checked={ favoritos ? favoritos[name] : ''} />
        <p>Favoritar Pokemon</p>
      </div>
      <h1>Sumary</h1>
      <p className="sumary">{ obj.summary }</p>
      <h1>Location</h1>
      <div className="grid-locations">
        {locations}
      </div>
      </>
    );
  }
}

export default MoreInfo;
