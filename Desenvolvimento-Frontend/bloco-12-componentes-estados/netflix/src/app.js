import React, { Component } from "react";
import Header from './components/header';
import FirstMovie from "./components/FirstMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.stateUpdator = this.stateUpdator.bind(this);
    this.state = {
      search: '',
      type: '',
    }
  }

  stateUpdator(state) {
    this.setState(state)
  }

  render() {
    const { movies } = this.props;
    return (
      <>
      <Header onClick={this.stateUpdator} />
      <FirstMovie />
      </>
    );
  }
}

export default App;
