import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorDisplay from './components/ErrorDisplay';

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
      <div>
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
        <h4>
          *Crime figures are updated monthly by the Police and stats are limited
          for any month within the last year.
        </h4>
        <Router primary={false}>
          <CrimeList path="/borough/:boroughName" startDate={startDate} />
          <ErrorDisplay default msg="" />
        </Router>
      </div>
    );
  }
}
export default App;
