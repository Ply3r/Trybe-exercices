import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuth } from '../redux/actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { user, password } = this.state;
    const { isAuth } = this.props;
    let isDisable = true;
    if (user.length > 6 && password.length > 6) {
      isDisable = false;
    }
    return (
      <div>
        <input name="user" value={ user } onChange={ this.handleChange } />
        <input name="password" value={ password } onChange={ this.handleChange } type="password" />
        <Link to="/clientes">
          <button onClick={ () => isAuth(true) } disabled={ isDisable }>Entrar</button>
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  isAuth: (bool) => dispatch(isAuth(bool)),
})

export default connect(null, mapDispatchToProps)(Login);
