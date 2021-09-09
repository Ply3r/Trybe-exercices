import Section from './section';
import './section.css';
const React = require('react');
const { album01, album02 } = require('./data');

class App extends React.Component {
  render() {
    return (
      <article className="article">
        <Section album={album01} />
        <Section album={album02} />
      </article>
    );
  }
}

export default App;