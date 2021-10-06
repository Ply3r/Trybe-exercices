import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.changePlayer = this.changePlayer.bind(this);
    this.importIdAgain = this.importIdAgain.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.showWinner = this.showWinner.bind(this);
    this.state = {
      id: 0,
      jogadas: 0,
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: '',
    };
  }

  async importIdAgain(id) {
    const { activePlayer, jogadas } = this.state;
    await this.setState({ id, jogadas: jogadas + 1 });
    await this.setState(after => after.gameBoard[id] === 0 ? after.gameBoard[id] = activePlayer : '');
    this.checkWinner();
    this.changePlayer();
  }

  checkWinner() {
    const magicSquare = [8, 1, 6, 3, 5, 7, 4, 9, 2]
    const { gameBoard, jogadas, activePlayer } = this.state;
    console.log(gameBoard)
    const sumMagic = gameBoard.reduce((acc, curr, index) => {
      if (curr === activePlayer) {
        acc.push(magicSquare[index])
      }
      return acc;
    }, [])
      .reduce((a, b) => a + b)
    if (sumMagic === 15) {
      activePlayer === 1 ? this.setState({ winner: 'X' }) : this.setState({ winner: 'O' })
    } else if(jogadas === 9) {
      this.setState({ winner: 'draw' })
    }
  }

  changePlayer() {
    const { activePlayer } = this.state;
    let value;
    activePlayer === 2 ? value = 1 : value = activePlayer + 1;
    this.setState({ activePlayer: value }) 
  }

  showWinner() {
    const { winner } = this.state;
    if (winner === 'X') {
      return (
        <h1>X ganhou</h1>
      );
    } else if (winner === 'O') {
      return (
        <h1>O ganhou</h1>
      );
    } else if (winner === 'draw') {
      return (
        <h1>Empatou</h1>
      );
    }
  }

  render() {
    const { gameBoard, winner } = this.state;
    return (
      <>
      { winner ? this.showWinner() : <GameBoard importIdAgain={ this.importIdAgain } gameState={gameBoard} />}
      </>
    )
  }
}

export default TicTacToe;
