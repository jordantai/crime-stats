import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import * as api from '../utils/api';
import CrimeCategoryChart from './CrimeCategoryChart';
import CrimeOutcomeChart from './CrimeOutcomeChart';
import ErrorDisplay from './ErrorDisplay';
import { formatAreaCoords, formatDate } from '../utils/functions';
import { areaCoords } from '../data/areaCoords';
import { ChartsContainer } from './styled/index';

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
    if (areaCoords.hasOwnProperty(boroughName!)) {
      const mapCoords: string = formatAreaCoords(areaCoords[boroughName!]);
      api
        .fetchCrimes(monthAndYear, mapCoords)
        .then((data) => {
          this.setState({
            crime: data,
            isLoading: false,
          });
        })
        .catch(() => {
          this.setState({ err: 'error', isLoading: false });
        });
    } else {
      this.setState({ err: 'redirect', isLoading: false });
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
    const { boroughName, startDate } = this.props;
    const { crime, isLoading, err } = this.state;
    let borough = '';
    if (boroughName) {
      borough =
        boroughName[0].toUpperCase() + boroughName.slice(1, boroughName.length);
    }
    if (isLoading) return <h2>Loading...</h2>;
    if (err === 'error') return <ErrorDisplay />;
    else if (err === 'redirect') return <Redirect to="/" noThrow />;
    return (
      <main>
        <ChartsContainer>
          <h2 className="chart-title">{borough}</h2>
          <CrimeCategoryChart crime={crime} startDate={startDate} />
          <CrimeOutcomeChart crime={crime} startDate={startDate} />
        </ChartsContainer>
      </main>
    );
  }
}

export default CrimeList;
