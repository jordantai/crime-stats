import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
