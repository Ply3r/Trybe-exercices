import React, { Component } from 'react';
import data from './data'
import Pokemon from './pokemon';

class App extends Component {

  render() {
    return (
      data.map((e) => (
        <Pokemon 
        name={e.name} 
        type={e.type} 
        weight={e.averageWeight.value + e.averageWeight.measurementUnit}
        url={e.image}
        id={e.id}
        />
      ))
    )
  }
}

export default App;