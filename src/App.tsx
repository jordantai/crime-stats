import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

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
        <DatePicker
          selected={startDate}
          onChange={(date) => this.handleDateChange(date)}
          minDate={subDays(new Date(), 770)}
          maxDate={addDays(new Date(), -60)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <Router>
          <CrimeList path="/borough/:boroughName" startDate={startDate} />
        </Router>
      </div>
    );
  }
}
export default App;
