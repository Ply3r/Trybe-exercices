import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';


ReactDOM.render(
  <React.Fragment>
  <h1>Pokedex</h1>
  <div className="grid">
    <App />
  </div>
  </React.Fragment>
  
  
  
  
  , document.getElementById('root')
);

