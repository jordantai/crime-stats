import React, { Component } from 'react';
import * as api from '../utils/api';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
  }

  getCrimes = () => {
    api.fetchCrimes().then((data) => {
      this.setState({ crime: data, isLoading: false });
    });
  };

  render() {
    const { crime, isLoading } = this.state;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        <section>
          <ul>
            {crime.map((incident) => {
              return <CrimeCard key={incident.id} incident={incident} />;
            })}
          </ul>
        </section>
        <section>
          <CrimeCategoryChart crime={crime} />
          <CrimeOutcomeChart crime={crime} />
        </section>
      </main>
    );
  }
}

export default CrimeList;
