import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps } from '@reach/router';
import * as api from '../utils/api';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import { formatAreaCoords, formatDate } from '../utils/functions';
import { areaCoords } from '../data/areaCoords';

class CrimeList extends Component<CrimeListProps & RouteComponentProps> {
  state: CrimeListState = {
    crime: [],
    isLoading: true,
    mapCoords: '',
  };

  componentDidUpdate(prevProps: CrimeListProps, prevState: CrimeListState) {
    const { mapCoords } = this.state;
    const { boroughName, startDate } = this.props;
    const mapCoordsHaveChanged = prevState.mapCoords !== mapCoords;
    const monthAndYearHasChanged = prevProps.startDate !== startDate;
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
    const { boroughName, startDate } = this.props;
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
    const { boroughName, startDate } = this.props;
    let borough = '';
    if (boroughName) {
      borough =
        boroughName[0].toUpperCase() + boroughName.slice(1, boroughName.length);
    }
    const { crime, isLoading } = this.state;
    if (isLoading) return <h2>Loading...</h2>;

    return (
      <main>
        <h2>{borough}</h2>
        <section>
          <CrimeCategoryChart crime={crime} startDate={startDate} />
          <CrimeOutcomeChart crime={crime} startDate={startDate} />
        </section>
      </main>
    );
  }
}

export default CrimeList;
