import React from 'react';
import { Link } from '@reach/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NavBar = () => {
  return (
    <nav>
      <Link to="/borough/stockport">
        <button value="stockport">Stockport</button>
      </Link>
      <Link to="/borough/bury">
        <button value="bury">Bury</button>
      </Link>
      <Link to="/borough/trafford">
        <button value="trafford">Trafford</button>
      </Link>
    </nav>
  );
};

export default NavBar;
