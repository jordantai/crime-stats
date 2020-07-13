import React, { Component } from 'react';
import * as api from '../utils/api';

class CrimeList extends Component {
  state = {
    crime: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getCrimes();
  }

  getCrimes = () => {
    api.fetchCrimes().then((data) => {
      this.setState({ crime: data, isLoading: false });
    });
  };

  render() {
    const { crime, isLoading } = this.state;
    console.log(crime);

    if (isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        {crime.map((incident) => {
          return <p>{incident}</p>;
        })}
      </main>
    );
  }
}

export default CrimeList;
