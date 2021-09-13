import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('oiiiiiiiii')
  }

  render() {
    return <button onClick={this.handleClick}>oi</button>
  }
}


export default App;
