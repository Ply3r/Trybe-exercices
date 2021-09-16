import React, { Component } from "react"

class Select extends Component {
  render() {
    const { estado, formChange } = this.props;
    return (
      <select id="estado" value={estado} onChange={formChange}>
        <option>Select State</option>
        <option>mg</option>
        <option>rj</option>
        <option>sp</option>
        <option>go</option>
      </select>
    );
  }
}


export default Select