import React from 'react';
import { crimeCategoryLookup } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeCategoryChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeCategoryLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);

  //Chart data object
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
      <h2>Crime Wheel</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CrimeCategoryChart;
