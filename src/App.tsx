import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <NavBar />
        <Router>
          <CrimeList path="/borough/:boroughName" />
        </Router>
      </div>
    );
  }
}
export default App;
