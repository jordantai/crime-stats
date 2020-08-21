import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorDisplay from './components/ErrorDisplay';
import { MainWrapper, SubWrapper } from './components/styled/index';

class App extends Component {
  state = {
    startDate: new Date('2019'),
  };

  handleDateChange = (date: Date | null) => {
    this.setState({ startDate: date });
  };

  render() {
    const { startDate } = this.state;
    return (
      <MainWrapper>
        <SubWrapper>
          <Title />
          <NavBar />
          <h3>Select a month to see the crime stats</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => this.handleDateChange(date)}
            minDate={subDays(new Date(), 770)}
            maxDate={addDays(new Date(), -60)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          <p>
            *Crime figures are updated monthly by the Police and stats are
            limited for any month within the last year.
          </p>
        </SubWrapper>
        <Router primary={false}>
          <Home path="/" />
          <CrimeList path="/borough/:boroughName" startDate={startDate} />
          <ErrorDisplay default />
        </Router>
      </MainWrapper>
    );
  }
}
export default App;
