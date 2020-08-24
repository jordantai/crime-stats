import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Title from './components/Title';
import CrimeList from './components/CrimeList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorDisplay from './components/ErrorDisplay';
import {
  MainWrapper,
  SubWrapper,
  DatePickerContainer,
  DateSelector,
  DateText,
  DateSubText,
} from './components/styled/index';

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
          <DatePickerContainer>
            <DateText>
              Select a month and click an area to see the stats
            </DateText>
            <DateSelector
              selected={startDate}
              onChange={(date) => this.handleDateChange(date)}
              minDate={subDays(new Date(), 770)}
              maxDate={addDays(new Date(), -60)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
            <DateSubText>
              *Crime figures are updated monthly by the Police so stats may be
              limited for certain months.
            </DateSubText>
          </DatePickerContainer>
          <NavBar />
        </SubWrapper>
        <Router>
          <Home path="/" />
          <CrimeList path="/borough/:boroughName" startDate={startDate} />
          <ErrorDisplay default />
        </Router>
        <Footer />
      </MainWrapper>
    );
  }
}
export default App;
