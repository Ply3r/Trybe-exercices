import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { value, formChange } = this.props;
    return (
      <textarea id="textarea" value={value} onChange={formChange}/>
    );
  }
}

export default TextArea;