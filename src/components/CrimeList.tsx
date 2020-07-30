import React, { Component, MouseEvent, useState } from 'react';
import * as api from '../utils/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatMonth, crimeCategoryLookup } from '../utils/functions';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatDate } from '../utils/functions';
import { stockportAreaCoords } from '../data/stockportAreaCoords';
import { buryAreaCoords } from '../data/buryAreaCoords';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '2019-02',
    mapCoords:
      '53.377494,-2.066427:53.396118,-2.090278:53.411600,-2.054972:53.403322,-2.034651',
    boroughName: '',
    startDate: new Date(),
  };

  componentDidUpdate(prevProps: any, prevState: CrimeListState) {
    const { mapCoords, startDate } = this.state;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    const monthAndYearHasChanged = prevState.startDate !== startDate;
    if (mapCoordsHaveChanged) {
      this.getCrimes();
    }
    if (monthAndYearHasChanged) {
      this.getCrimes();
    }
  }

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
  }

  getCrimes = () => {
    const { mapCoords, startDate } = this.state;
    const monthAndYear = formatDate(startDate);
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

  handleDateChange = (date: Date) => {
    this.setState({ startDate: date });
  };

  // getNeighbourhoodCoords = () => {
  //   api.fetchNeighbourhoodCoords().then((data) => {
  //     const neighbourhoodCoords = formatNeighourhoodCoords(data);
  //     this.setState({ neighbourhoodCoords });
  //   });
  // };

  render() {
    const { crime, isLoading, boroughName, startDate } = this.state;
    if (isLoading) return <h2>Loading...</h2>;
    console.log(this.state);
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
        <DatePicker
          selected={startDate}
          onChange={this.handleDateChange}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
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
