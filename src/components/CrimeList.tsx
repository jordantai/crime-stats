import React, { Component } from 'react';
import * as api from '../utils/api';
import { formatMonth } from '../utils/functions';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '2019-12',
  };

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
    this.getMapData();
  }

  getCrimes = () => {
    api.fetchCrimes(this.state.monthAndYear).then((data) => {
      console.log(data);
      this.setState({ crime: data, isLoading: false });
    });
  };

  getMapData = () => {
    api.fetchMapAreaData().then((data) => {
      console.log(data[0].geojson.coordinates);
    });
  };

  render() {
    const { crime, isLoading } = this.state;
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
