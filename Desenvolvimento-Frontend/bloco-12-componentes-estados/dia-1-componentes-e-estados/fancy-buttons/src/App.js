import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.clicks1 = this.clicks1.bind(this);
    this.clicks10 = this.clicks10.bind(this);
    this.clicks100 = this.clicks100.bind(this);
    this.state = {
      clicks: 0
    }
  }

  clicks1() {this.setState((after, _props) => ({clicks: after.clicks += 1}))}
  clicks10() {this.setState((after, _props) => ({clicks: after.clicks += 10}))}
  clicks100() {this.setState((after, _props) => ({clicks: after.clicks += 100}))}

  render() {
    return (
      <div>
        <div className="container">{this.state.clicks}</div>
        <button onClick={this.clicks1}>+1</button>
        <button onClick={this.clicks10}>+10</button>
        <button onClick={this.clicks100}>+100</button>
      </div>
    )
  }
}


export default App;
