import React, { Component } from "react"
import Select from "./Select"
import Inputs from './Inputs'
import TextArea from './textArea'

class Form extends Component {
  constructor(props) {
    super(props)
    this.formChange = this.formChange.bind(this)
    this.state = {
      name: '',
      email: '',
      textarea: '',
      estado: ''
    }
  }

  formChange({ target }) {
    const { id, value } = target;
    this.setState({[id]: value})
  }

  render() {
    return (
      <div>
        <form>
          <Inputs name={this.state.name} email={this.state.email} formChange={this.formChange}/>
          <TextArea value={this.state.textarea} formChange={this.formChange}/>
          <Select value={this.state.estado} formChange={this.formChange}/>
        </form>
      </div>
    );
  }
}

export default Form;
