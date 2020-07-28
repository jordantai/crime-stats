import React from 'react';
import { crimeOutcomeLookup, randomColorGenerator } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeOutcomeChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeOutcomeLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);
  const colours = randomColorGenerator(valuesArray);

  // chart data object
  const data = {
    labels: [...keysArray],
    datasets: [
      {
        data: [...valuesArray],
        backgroundColor: [...colours],
        hoverBackgroundColor: [...colours],
      },
    ],
  };

  return (
    <div>
      <h2>Outcome Wheel</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CrimeOutcomeChart;
