import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps } from '@reach/router';
import * as api from '../utils/api';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
//import CrimeCard from './CrimeCard';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatDate } from '../utils/functions';
import { areaCoords } from '../data/areaCoords';

interface CrimeListProps {
  boroughName?: string;
}

class CrimeList extends Component<CrimeListProps & RouteComponentProps> {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    mapCoords: '',
    startDate: new Date('2019'),
  };

  componentDidUpdate(prevProps: CrimeListProps, prevState: CrimeListState) {
    const { mapCoords, startDate } = this.state;
    const { boroughName } = this.props;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    const monthAndYearHasChanged = prevState.startDate !== startDate;
    const boroughHasChanged = prevProps.boroughName !== boroughName;
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
    const { startDate } = this.state;
    const { boroughName } = this.props;
    const monthAndYear = formatDate(startDate);
    const mapCoords: string = formatAreaCoords(areaCoords[boroughName!]);
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
    console.log(this.props.boroughName);
    const { boroughName } = this.props;
    const { crime, isLoading, startDate } = this.state;
    if (isLoading) return <h2>Loading...</h2>;
    console.log(this.state);

    let crimeChart;
    let crimeOutcomes;
    if (crime.length !== 0) {
      crimeChart = <CrimeCategoryChart crime={crime} startDate={startDate} />;
      crimeOutcomes = <CrimeOutcomeChart crime={crime} startDate={startDate} />;
    }

    return (
      <main>
        <nav>
          {/* <button value="stockport" onClick={this.handleClick}>
            Stockport
          </button>
          <button value="bury" onClick={this.handleClick}>
            Bury
          </button>
          <button value="trafford" onClick={this.handleClick}>
            Trafford
          </button>
          <button value="bolton" onClick={this.handleClick}>
            Bolton
          </button>
          <button value="rochdale" onClick={this.handleClick}>
            Rochdale
          </button>
          <button value="oldham" onClick={this.handleClick}>
            Oldham
          </button>
          <button value="tameside" onClick={this.handleClick}>
            Tameside
          </button>
          <button value="city" onClick={this.handleClick}>
            City Centre
          </button>
          <button value="salford" onClick={this.handleClick}>
            Salford
          </button>
          <button value="wigan" onClick={this.handleClick}>
            Wigan
          </button> */}

          <DatePicker
            selected={startDate}
            onChange={(date) => this.handleDateChange(date)}
            minDate={subDays(new Date(), 770)}
            maxDate={addDays(new Date(), -60)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </nav>
        <h2>{boroughName}</h2>
        <section>
          <ul>
            {/* {crime.map((incident) => {
              return <CrimeCard key={incident.id} incident={incident} />;
            })} */}
          </ul>
        </section>
        <section>
          {crimeChart}
          {crimeOutcomes}
        </section>
      </main>
    );
  }
}

export default CrimeList;
