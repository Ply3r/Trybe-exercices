import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  constructor(props) {
    super(props);
    this.exportId = this.exportId.bind(this);
  }

  exportId({target: {id}}) {
    const { importId } = this.props;
    importId(id)
  }

  render() {
    const { id, playerId } = this.props;

    return (
      <div onClick={ this.exportId } data-testid={`cell_${id}`} id={id} className="game-cell">
        { playerId === 1 ? <img src={xImage} data-testid={`X_${id}`} alt="aaa" /> : playerId === 2 ? <img data-testid={`O_${id}`} src={oImage} alt="aaa"/> : '' }
      </div>
    );
  }
}

export default GameCell;
