import React, { Component, MouseEvent } from 'react';
import * as api from '../utils/api';
import { formatMonth, crimeCategoryLookup } from '../utils/functions';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatNeighourhoodCoords } from '../utils/functions';
import { stockportAreaCoords } from '../utils/stockportAreaCoords';
import { buryAreaCoords } from '../utils/buryAreaCoords';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '2019-02',
    mapCoords:
      '53.377494,-2.066427:53.396118,-2.090278:53.411600,-2.054972:53.403322,-2.034651',
    boroughName: '',
  };

  componentDidUpdate(prevProps: any, prevState: CrimeListState) {
    const { mapCoords } = this.state;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    if (mapCoordsHaveChanged) {
      this.getCrimes();
    }
  }

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
  }

  getCrimes = () => {
    const { monthAndYear, mapCoords } = this.state;
    api.fetchCrimes(monthAndYear, mapCoords).then((data) => {
      this.setState({
        crime: data,
        isLoading: false,
      });
    });
  };

  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const borough = target.value;
    if (borough === 'stockport') {
      const stockport = formatAreaCoords(stockportAreaCoords);
      this.setState({
        mapCoords: stockport,
        boroughName: borough.toUpperCase(),
      });
    } else if (borough === 'bury') {
      const bury = formatAreaCoords(buryAreaCoords);
      this.setState({ mapCoords: bury, boroughName: borough.toUpperCase() });
    }
  };

  // getNeighbourhoodCoords = () => {
  //   api.fetchNeighbourhoodCoords().then((data) => {
  //     const neighbourhoodCoords = formatNeighourhoodCoords(data);
  //     this.setState({ neighbourhoodCoords });
  //   });
  // };

  render() {
    const { crime, isLoading, boroughName } = this.state;
    console.log(this.state);
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <main>
        <h2>{boroughName}</h2>
        <button value="stockport" onClick={this.handleClick}>
          Stockport
        </button>
        <button value="bury" onClick={this.handleClick}>
          Bury
        </button>
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
