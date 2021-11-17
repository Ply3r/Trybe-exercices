import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeClients } from "../redux/actions";

class Cadastros extends Component {
  constructor(props) {
    super(props);
    const { clients } = this.props;
    this.state = {
      type: 'original',
      clients,
    }
  }

  deleteClient = (name) => {
    const { clients, changeClients } = this.props;
    const filteredClients = clients.filter((cliente) => cliente.name !== name)
    changeClients(filteredClients)
  }

  toggleType = () => {
    const { clients } = this.props;
    const { type } = this.state;
    let hold = type;
    if (type === 'original') {
      hold = 'ASC'
    } else { 
      hold = 'original'
    }

    let clientes = [...clients];
    let holdClientes = []
    
    if (hold === 'ASC') {
      holdClientes = clientes.sort(({ name: nameA }, { name: nameB }) => nameA > nameB ? 1 : -1 )
    } else {
      holdClientes = clients;
    }
    
    console.log(clients, holdClientes);

    this.setState({ type: hold, clients: holdClientes })
  }

  showClients = () => {
    const { clients } = this.state;

    if (!clients.length) {
      return (
        <>
          <p>Nenhum cliente cadastrado</p>
          <Link to="/signup">
            <button>Cadastrar Clientes</button>
          </Link>
        </>
      )
    };

    const clientes = clients.map(({ name, age, email }) => (
        <tr>
          <td>{ name }</td>
          <td>{ age }</td>
          <td>{ email }</td>
          <td>
            <button onClick={ () => this.deleteClient(name) }>X</button>
          </td>
        </tr>
    ))
    return (
      <>
        <button onClick={ this.toggleType }>Ordenar</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            { clientes }
          </tbody>
        </table>
        <Link to="/signup">
          <button>Cadastrar Clientes</button>
        </Link>
      </>
    )
  }

  render() {
    const { auth } = this.props;
    return (
      <>
        { auth ? this.showClients() : 'Login não efetuado' }
      </>
    )
  }
}

const mapStateToProps = ({ clients, auth }) => ({ clients, auth })

const mapDispatchToProps = (dispatch) => ({ changeClients: (clients) => dispatch(changeClients(clients)) })

export default connect(mapStateToProps, mapDispatchToProps)(Cadastros)
