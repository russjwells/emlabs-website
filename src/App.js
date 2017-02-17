import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory } routes={ routes }>
        
      </Router>
    );
  }
}

export default App;
