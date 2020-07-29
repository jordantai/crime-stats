import React, { Component } from 'react';
import * as api from '../utils/api';
import { formatMonth, crimeCategoryLookup } from '../utils/functions';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatNeighourhoodCoords } from '../utils/functions';
import { stockportAreaCoords } from '../utils/stockportAreaCoords';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '2019-02',
    mapCoords: '',
  };

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
  }

  getCrimes = () => {
    const { monthAndYear } = this.state;
    const newMapCoords = formatAreaCoords(stockportAreaCoords);
    api.fetchCrimes(monthAndYear, newMapCoords).then((data) => {
      this.setState({ crime: data, isLoading: false, mapCoords: newMapCoords });
    });
  };

  render() {
    const { crime, isLoading } = this.state;
    console.log(this.state);
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        <h2>Stockport</h2>
        {/* <h3>{formatMonth(crime[0].month)}</h3> */}
        <section>
          <ul>
            {/* {crime.map((incident) => {
              return <CrimeCard key={incident.id} incident={incident} />;
            })} */}
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
