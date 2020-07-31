import React, { Component, MouseEvent } from 'react';
import * as api from '../utils/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatMonth, crimeCategoryLookup } from '../utils/functions';
import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatDate } from '../utils/functions';
import { areaCoords } from '../data/areaCoords';

class CrimeList extends Component {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '2019-02',
    mapCoords: '',
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
      const stockport = formatAreaCoords(areaCoords.stockport);
      this.setState({
        mapCoords: stockport,
        boroughName: borough.toUpperCase(),
      });
    } else if (borough === 'bury') {
      const bury = formatAreaCoords(areaCoords.bury);
      this.setState({ mapCoords: bury, boroughName: borough.toUpperCase() });
    } else if (borough === 'trafford') {
      const trafford = formatAreaCoords(areaCoords.trafford);
      this.setState({
        mapCoords: trafford,
        boroughName: borough.toUpperCase(),
      });
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
        <button value="trafford" onClick={this.handleClick}>
          Trafford
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
          <CrimeCategoryChart crime={crime} startDate={startDate} />
          <CrimeOutcomeChart crime={crime} startDate={startDate} />
        </section>
      </main>
    );
  }
}

export default CrimeList;
