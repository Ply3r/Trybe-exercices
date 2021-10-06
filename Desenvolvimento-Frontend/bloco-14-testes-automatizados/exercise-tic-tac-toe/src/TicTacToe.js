import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.changePlayer = this.changePlayer.bind(this);
    this.importIdAgain = this.importIdAgain.bind(this);
    this.state = {
      id: 0,
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  importIdAgain(id) {
    const { activePlayer } = this.state;
    this.setState({ id });
    this.setState(after => after.gameBoard[id] === 0 ? after.gameBoard[id] = activePlayer : '');
    this.changePlayer();
  }

  changePlayer() {
    const { activePlayer } = this.state;
    let value;
    activePlayer === 2 ? value = 1 : value = activePlayer + 1;
    this.setState({ activePlayer: value }) 
  }

  render() {
    const { gameBoard } = this.state;
    return <GameBoard importIdAgain={ this.importIdAgain } gameState={gameBoard} />;
  }
}

export default TicTacToe;
