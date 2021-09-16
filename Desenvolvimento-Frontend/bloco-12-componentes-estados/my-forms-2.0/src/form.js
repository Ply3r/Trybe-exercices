import React, { Component } from "react";
import FieldsetUM from "./fields/fildsetUm";
import FieldsetDOIS from "./fields/fildsetDois";
import './form.css';

class Form extends Component {
  constructor() {
    super();
    this.formChange = this.formChange.bind(this);
    this.getInformation = this.getInformation.bind(this)
    this.clear = this.clear.bind(this)
    this.state = {
      name: '',
      email: '',
      cpf : '',
      endereco: '',
      cidade: '',
      estado: '',
      resumo: '',
      cargo: '',
      tipo: '',
      cargoDescription: '',
    }
  }

  formChange({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }
  
  getInformation(_event) {
    const div = document.querySelector('.show-information');
    const information = document.querySelector('.information');
    information.innerHTML = ''
    const obj = this.state;
    let verification = true;
    for (let item in obj) {
      if (!obj[item]) {
        alert(`informação necessaria no campo ${item}`)
        verification = false;
        break
      }

      if (item === 'email') {
        if (!obj[item].match(/@.*(.com)$/)) {
          alert(`Email com o formato incorreto`)
          verification = false;
          break
        }
      }
    }

    if (verification) {
      for (let item in obj) {
        const p = document.createElement('p')
        p.innerText = `${item}: ${obj[item]}`
        information.appendChild(p)
      }
      div.style.display = 'flex'
    }
  }

  clear() {
    this.setState({
      name: '',
      email: '',
      cpf : '',
      endereco: '',
      cidade: '',
      estado: '',
      resumo: '',
      cargo: '',
      tipo: '',
      cargoDescription: '',
    })
  }

  closePopUp(_event) {
    const div = document.querySelector('.show-information');
    div.style.display = 'none'
  }

  render() {
    const { name, email, cpf, endereco, cidade, estado, tipo, cargo, resumo, cargoDescription } = this.state;

    return (
      <div>
        <h1>Form</h1>
        <form>
          <FieldsetUM
          name={name}
          email={email}
          cpf={cpf}
          endereco={endereco}
          cidade={cidade}
          estado={estado}
          tipo={tipo}
          formChange={this.formChange}
          />
          <FieldsetDOIS 
          resumo={resumo}
          cargo={cargo}
          cargoDescription={cargoDescription}
          formChange={this.formChange}
          />
        </form>
        <div className="bot-container">
          <button onClick={this.clear}>Limpar</button>
          <button className="enviar" onClick={this.getInformation}>Enviar</button>
        </div>
        <div className="show-information">
          <h2 onClick={this.closePopUp}>X</h2>
          <div className="information"></div>
        </div>
      </div>
    );
  }
}

export default Form;