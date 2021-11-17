import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeClients } from "../redux/actions";

class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  cadastraCliente = () => {
    const estado = this.state;
    const { clients, changeClients } = this.props;
    changeClients([...clients, estado]);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <>
        <form>
          <label htmlFor="name">
            Name:
            <input 
              placeholder="name" 
              name="name" 
              value={ name } 
              onChange={ this.handleChange } 
              id="name" 
            />
          </label>
          <label htmlFor="age">
            Age:
            <input 
              type="number" 
              placeholder="18" 
              name="age" 
              value={ age } 
              onChange={ this.handleChange } 
              id="age" 
            />
          </label>
          <label htmlFor="email">
            Email:
            <input  
              placeholder="email" 
              name="email" 
              value={ email } 
              onChange={ this.handleChange } 
              id="email" 
            />
          </label>
          <button
            onClick={ (event) => {
              event.preventDefault();
              this.cadastraCliente();
            }}
          >
            Cadastrar
          </button>
        </form>
        <Link to="/clientes">
          <button>Voltar</button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = ({ clients }) => ({ clients })

const mapDispatchToProps = (dispatch) => ({
  changeClients: (clients) => dispatch(changeClients(clients))
});

export default connect(mapStateToProps, mapDispatchToProps)(Singup);
