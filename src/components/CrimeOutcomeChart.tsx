import React from 'react';
import { crimeOutcomeLookup } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeOutcomeChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeOutcomeLookup(crime);
  const keysArray = Object.keys(chartObj);
  // const upperCase = keysArray.map((key) => {
  //   let upperCaseKey = key[0].toUpperCase();
  //   return upperCaseKey;
  // });
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
        ],
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
