import React, { Component, MouseEvent } from 'react';
import * as api from '../utils/api';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
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
    mapCoords: '',
    boroughName: '',
    startDate: new Date('2019'),
  };

  componentDidUpdate(prevProps: any, prevState: CrimeListState) {
    const { mapCoords, startDate, boroughName } = this.state;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    const monthAndYearHasChanged = prevState.startDate !== startDate;
    const boroughHasChanged = prevState.boroughName !== boroughName;
    if (mapCoordsHaveChanged) {
      this.getCrimes();
    }
    if (monthAndYearHasChanged) {
      this.getCrimes();
    }
    if (boroughHasChanged) {
      this.getCrimes();
    }
  }

  componentDidMount() {
    console.log('mounted');
    this.getCrimes();
  }

  getCrimes = () => {
    const { startDate, boroughName } = this.state;
    if (boroughName !== '') {
      const monthAndYear = formatDate(startDate);
      const mapCoords: string = formatAreaCoords(areaCoords[boroughName!]);
      api.fetchCrimes(monthAndYear, mapCoords).then((data) => {
        this.setState({
          crime: data,
          isLoading: false,
        });
      });
    } else {
      this.setState({ isLoading: false });
    }
  };

  handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const borough = target.value;
    const newMapCoords = formatAreaCoords(areaCoords[borough]);
    this.setState({
      mapCoords: newMapCoords,
      boroughName: borough,
    });
  };

  handleDateChange = (date: Date | null) => {
    this.setState({ startDate: date });
  };

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
          onChange={(date) => this.handleDateChange(date)}
          minDate={subDays(new Date(), 770)}
          maxDate={addDays(new Date(), -60)}
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
