import React from 'react';
import { crimeCategoryLookup, randomColorGenerator } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeCategoryChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeCategoryLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);
  const colors = randomColorGenerator(valuesArray.length);

  //Chart data object
  const data = {
    labels: [...keysArray],
    datasets: [
      {
        data: [...valuesArray],
        backgroundColor: [...colors],
        hoverBackgroundColor: [...colors],
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
