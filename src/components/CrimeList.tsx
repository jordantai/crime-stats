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
import { RouteComponentProps } from '@reach/router';

interface CrimeListProps extends RouteComponentProps {
  boroughName?: string;
}

class CrimeList extends Component<CrimeListProps> {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    monthAndYear: '',
    boroughName: this.props.boroughName,
    startDate: new Date('February 01, 2018 00:00:01'),
    mapCoords: '',
  };

  componentDidUpdate(prevProps: CrimeListProps, prevState: CrimeListState) {
    const { mapCoords, startDate, boroughName } = this.state;
    const boroughHasChanged = prevState.boroughName !== boroughName;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    const monthAndYearHasChanged = prevState.startDate !== startDate;
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
    const { boroughName } = this.props;
    const { startDate } = this.state;
    const mapCoords: string = formatAreaCoords(areaCoords[boroughName!]);
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
        boroughName: borough,
      });
    } else if (borough === 'bury') {
      const bury = formatAreaCoords(areaCoords.bury);
      this.setState({ mapCoords: bury, boroughName: borough });
    } else if (borough === 'trafford') {
      const trafford = formatAreaCoords(areaCoords.trafford);
      this.setState({
        mapCoords: trafford,
        boroughName: borough,
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
    console.log(this.props);
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
