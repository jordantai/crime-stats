import React from 'react';
import { Link } from '@reach/router';
import { NavButton } from './styled/index';

const NavBar = () => {
  return (
    <nav>
      <Link to="/borough/bolton">
        <NavButton value="bolton">Bolton</NavButton>
      </Link>
      <Link to="/borough/bury">
        <NavButton value="bury">Bury</NavButton>
      </Link>
      <Link to="/borough/city">
        <NavButton value="city">Manchester City Centre</NavButton>
      </Link>
      <Link to="/borough/oldham">
        <NavButton value="oldham">Oldham</NavButton>
      </Link>
      <Link to="/borough/rochdale">
        <NavButton value="rochdale">Rochdale</NavButton>
      </Link>
      <Link to="/borough/salford">
        <NavButton value="salford">Salford</NavButton>
      </Link>
      <Link to="/borough/stockport">
        <NavButton value="stockport">Stockport</NavButton>
      </Link>
      <Link to="/borough/tameside">
        <NavButton value="tameside">Tameside</NavButton>
      </Link>
      <Link to="/borough/trafford">
        <NavButton value="trafford">Trafford</NavButton>
      </Link>
      <Link to="/borough/wigan">
        <NavButton value="wigan">Wigan</NavButton>
      </Link>
    </nav>
  );
};

export default NavBar;
