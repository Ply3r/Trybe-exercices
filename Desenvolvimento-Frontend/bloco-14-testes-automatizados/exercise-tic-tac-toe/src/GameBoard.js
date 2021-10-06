import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.importId = this.importId.bind(this)
    this.state = {
      id: ''
    }
  }

  importId(id) {
    const { importIdAgain } = this.props;
    this.setState({ id })
    importIdAgain(id);
  }

  render() {
    return (
      <div className="game-board">
        {this.props.gameState.map((playerId, i) => (
          <GameCell id={i} playerId={ playerId } importId={this.importId}/>
        ))}
      </div>
    );
  }
}

export default GameBoard;
