import React from 'react';
import { Doughnut } from 'react-chartjs-2';

type CrimeChartProps = {
  crime: Incident[];
};

const CrimeChart = ({ crime }: CrimeChartProps) => {
  console.log(crime);

  return <div></div>;
};

export default CrimeChart;
