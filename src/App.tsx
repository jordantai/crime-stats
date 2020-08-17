import React from 'react';
import './App.css';
import Title from './components/Title';
import CrimeList from './components/CrimeList';

const App = () => {
  return (
    <div>
      <Title />

      <CrimeList />
    </div>
  );
};

export default App;
