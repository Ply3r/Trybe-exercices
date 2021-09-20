import React, {Component} from "react";
import MovieCard from "./movieCard";
import getTrending from "../getTrending";
import './movieSection.css'

class MovieSection extends Component {
  constructor(props) {
    super(props);
    const { page } = this.props;
    this.state = {
      movies: '',
      page,
    }
  }

  componentDidMount() {
    const { page } = this.state;
    getTrending(page).then((res) => {
      this.setState({movies: res})
    })
  }

  render() {
    const { types, search, title } = this.props;
    let { movies } = this.state;
    let moviesList;
    if (movies.length) {

      if (types) {
        if(types !== 'All') {
          movies = movies.filter(({genre_ids}) => genre_ids.includes(parseInt(types)))
        }
      }

      if (search) {
        const lowerCase = search.toLowerCase() 
        const regex = new RegExp(lowerCase, 'gm')
        movies = movies.filter(({ title }) => {
          title = title.toLowerCase()
          return regex.test(title)
        })
      }

      moviesList = movies.map(({ original_language, vote_average, title, overview, img }) => (
        <MovieCard 
          title={title}
          img={img}
          overview={overview}
          vote_average={vote_average}
          original_language={original_language}
        />
      ))
    }
    
    return (
      <>
      <div className="section-container">
        <h2 className="titulo">{title}</h2>
        <section className="movie-section">
          {moviesList}
        </section>
      </div>
      </>
    );
  }
}

export default MovieSection;