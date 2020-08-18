import React, { useState } from 'react';
import { Link } from '@reach/router';
import DatePicker from 'react-datepicker';
import { subDays, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const NavBar = () => {
  // const [startDate, setStartDate] = useState(new Date('2019'));
  return (
    <nav>
      <Link to="/borough/bolton">
        <button value="bolton">Bolton</button>
      </Link>
      <Link to="/borough/bury">
        <button value="bury">Bury</button>
      </Link>
      <Link to="/borough/city-centre">
        <button value="city">Manchester City Centre</button>
      </Link>
      <Link to="/borough/oldham">
        <button value="oldham">Oldham</button>
      </Link>
      <Link to="/borough/rochdale">
        <button value="rochdale">Rochdale</button>
      </Link>
      <Link to="/borough/salford">
        <button value="salford">Salford</button>
      </Link>
      <Link to="/borough/stockport">
        <button value="stockport">Stockport</button>
      </Link>
      <Link to="/borough/tameside">
        <button value="tameside">Tameside</button>
      </Link>
      <Link to="/borough/trafford">
        <button value="trafford">Trafford</button>
      </Link>
      <Link to="/borough/wigan">
        <button value="wigan">Wigan</button>
      </Link>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        minDate={subDays(new Date(), 770)}
        maxDate={addDays(new Date(), -60)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      /> */}
    </nav>
  );
};

export default NavBar;
