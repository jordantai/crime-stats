import React from 'react';
import { crimeOutcomeLookup } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeOutcomeChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeOutcomeLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);

  // chart data object
  const data = {
    labels: [...keysArray],
    datasets: [
      {
        data: [...valuesArray],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#57FFD1',
          '#EF70FF',
          '#2BB38E',
          '#FFA33D',
          '#63D4FF',
          '#CC3151',
          '#718E99',
          '#cccccc',
          '#ff0000',
          '#dddddd',
          '#333333',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#57FFD1',
          '#EF70FF',
          '#2BB38E',
          '#FFA33D',
          '#63D4FF',
          '#CC3151',
          '#718E99',
          '#cccccc',
          '#ff0000',
          '#dddddd',
          '#333333',
        ],
      },
    ],
  };
  console.log(data);

  return (
    <div>
      <h2>Outcome Wheel</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CrimeOutcomeChart;
