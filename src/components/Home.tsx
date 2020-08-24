import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { HomeContainer } from './styled/index';

const Home = (_: RouteComponentProps) => {
  return (
    <HomeContainer>
      <h2 className="borough-name">Welcome</h2>
      <p>
        Crime Stats MCR is a portfolio front-end project by Jordan Craigen, a
        recent full stack developer bootcamp graduate.
      </p>
      <p>
        It is widely known that over the past few years Police funding has been
        cut by the Government and the number of Police officers has reduced. It
        is also reported that crime, in particular violent crime, is on the
        increase.
      </p>
      <p>
        I wanted to see the crime statistics for my own borough (Stockport) and
        also the other boroughs in the county of Greater Manchester and hence
        the idea for this app was born.
      </p>
      <p>
        All crime data is fetched from the{' '}
        <a href="https://data.police.uk/">Police API.</a>
      </p>
    </HomeContainer>
  );
};

export default Home;
