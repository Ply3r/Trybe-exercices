// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import GameBoard from './GameBoard';
import TicTacToe from './TicTacToe';

describe('testa as funcionalidades do Tic-Tac-Toe', () => {
  it('should have 9 components', () => {
    render(<GameBoard gameState={[0, 0, 0, 0, 0, 0, 0, 0, 0]} />)
    const squares = document.getElementsByClassName('game-cell');
    expect(squares).toHaveLength(9)
  })

  it('should change the square when click event', () => {
    render(<TicTacToe />)
    const cell = screen.getByTestId('cell_0');
    userEvent.click(cell);
    const X = screen.getByTestId('X_0');
    expect(X).toBeInTheDocument()

  })
})