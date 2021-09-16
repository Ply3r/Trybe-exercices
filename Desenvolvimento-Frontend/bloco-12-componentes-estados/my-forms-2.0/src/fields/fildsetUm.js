import React, { Component } from "react";
import './css/fieldset.css'
const states = require('./estados')

class FieldsetUM extends Component {
  
  citieVerification({ target }) {
    const { value } = target;
    if (value.match(/^\d+/)) {
      target.value = '';
    }
  }

  render() {
    let { name, email, cpf, endereco, cidade, estado, formChange } = this.props;
    name = name.toUpperCase()
    

    const options = states.map((estado) => <option name="estado">{estado}</option>)

    return (
      <fieldset className="fieldSet">
        <div className="grid">
          <h2>Nome:</h2>
          <h2>Email:</h2>
          <input name="name" value={name} onChange={formChange} placeholder="Digite seu Nome" maxLength="40" />
          <input name="email" value={email} onChange={formChange} placeholder="Digite seu Email" maxLength="50"/>
        </div>
        <div className="flex">
          <h2>Cpf:</h2>
          <input name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={formChange} maxLength="11"/>
        </div>
        <div className="flex">
          <h2>Endereço:</h2>
          <textarea maxLength="200" placeholder="Digite seu Endereço" name="endereco" value={endereco} onChange={formChange} />
        </div>
        <div className="grid">
          <h2>Cidade:</h2>
          <h2>Estado:</h2>
          <input name="cidade" placeholder="digite sua Cidade" value={cidade} onChange={formChange} onBlur={this.citieVerification}/>
          <select name="estado" value={estado} onChange={formChange}>
            <option>Escolha um estado:</option>
            {options}
          </select>
        </div>
        <div className="flex">
          <h2>Tipo de moradia</h2>
          <br />
          <div className="grid">
            <label className="label">
              <h2>Casa:</h2>
              <input name="tipo" type="radio" value="Casa" onChange={formChange} />
            </label>
            <label className="label">
              <h2>Apartamento:</h2>
              <input name="tipo" type="radio" value="Apartamento" onChange={formChange} />
            </label>
          </div>
        </div>

      </fieldset>
    );
  }
}

export default FieldsetUM;