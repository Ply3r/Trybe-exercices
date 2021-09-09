import './section.css';
import PropTypes from 'prop-types';
const React = require('react');

class Section extends React.Component {

  render() {
    const { album } = this.props

    return (
      <section className="section">
          <img src={ album.image } alt={ album.title } />
          <h2>{ album.title }</h2>
          <p>Lançamento: { album.releaseDate.year }</p>
          <p>Gravadora: { album.others.recordCompany }</p>
          <p>Formatos: { album.others.formats }</p>
      </section>
    );
  }
}

Section.propTypes = {
  album: PropTypes.object,
}

export default Section;