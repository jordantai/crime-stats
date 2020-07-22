import React from 'react';
import { crimeOutcomeLookup } from '../utils/functions';

const CrimeOutcomeChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeOutcomeLookup(crime);
  console.log(chartObj);
  return <div></div>;
};

export default CrimeOutcomeChart;
