import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const { name, email, formChange } = this.props;

    return (
      <div>
        <label>Nome:
          <input id="name" type="name" value={name} onChange={formChange}/>
        </label>
        <label>Email
          <input id="email" type="email" value={email} onChange={formChange}/>
        </label>
      </div>
    )
  }
}

export default Inputs;