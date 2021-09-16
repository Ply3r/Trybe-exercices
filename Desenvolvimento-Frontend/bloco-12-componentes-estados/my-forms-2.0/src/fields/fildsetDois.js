import React, { Component } from 'react';
import './css/fieldset.css'


class FieldsetDOIS extends Component {
  constructor() {
    super();
    this.mouseEnter = this.mouseEnter.bind(this)
    this.state = {
      mouseEnter: 0
    }
  }

  mouseEnter(_event) {
    this.setState((after) => ({ mouseEnter: after.mouseEnter += 1 }))
    if (this.state.mouseEnter < 1) {
      alert('Preencha com cuidado esta informação.');
    }
  }

  render() {
    const { resumo, cargo, cargoDescription, formChange } = this.props;

    return (
      <fieldset className="fieldSet">
        <div className="flex">
          <h2>Resumo do curriculo:</h2>
          <textarea maxLength="1000" name="resumo" value={resumo} onChange={formChange}/>
        </div>
        <div className="flex">
          <h2>Cargo:</h2>
          <input maxLength="40" name="cargo" value={cargo} onChange={formChange} onMouseEnter={this.mouseEnter} />
        </div>
        <div className="flex">
          <h2>Descrição do Cargo:</h2>
          <textarea maxLength="500" name="cargoDescription" value={cargoDescription} onChange={formChange}/>
        </div>
      </fieldset>
    );
  }
}

export default FieldsetDOIS;