import React from 'react';
import './App.css';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router primary={false}>
        <CrimeList path="/borough/:boroughName" />
      </Router>
    </div>
  );
}

export default App;
