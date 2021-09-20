import React, { Component } from "react";
import getApi from '../getFirstMovie';
import './firstMovie.css'

class FirstMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: '',
      genre_ids: '',
      overview: '',
      img: '',
      vote_average: '',
      original_language: '',
    }
  }

  componentDidMount() {
    getApi().then(({ id, original_language, vote_average, title, genre_ids, overview, img }) => {
      this.setState({ title, id, original_language, vote_average, genre_ids, overview, img })
    })
  }

  render() {
    const { title, overview, original_language, img, vote_average } = this.state;
    return (
      <section className="firstMovie-section" style={{backgroundImage: `url(${img})`}}>
        <div className="information-FirstMovie">
          <h1>{title}</h1>
          <p className="overview">{overview}</p>
          <h2>Rating: <span className="rating">{vote_average}</span></h2>
          <p className="languages">Languages: {original_language}</p>
        </div>
      </section>
    );
  }
}

export default FirstMovie;
