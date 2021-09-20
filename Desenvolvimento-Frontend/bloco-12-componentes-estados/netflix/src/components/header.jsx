import React, { Component } from "react";
import './header.css';
import Search from "./Search";

class Header extends Component {
  constructor() {
    super();
    this.exportSearch = this.exportSearch.bind(this);
    this.formChange = this.formChange.bind(this);
    this.state = {
      search: '',
      type: 'All',
    }
  }

  exportSearch() {
    const { onClick } = this.props;
    onClick(this.state)
    this.setState({
      search: '',
      type: 'All',
    });
  }

  formChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { search, type } = this.state;
    return (
      <header>
        <h1>NETFLIX</h1>
        <div className="search-header">
          <Search
            search={search}
            type={type}
            formChange={this.formChange}
          />
          <button onClick={this.exportSearch}>Buscar</button>
        </div>
      </header>
    );
  }
}

export default Header;
