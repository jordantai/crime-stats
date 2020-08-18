import React from 'react';
import { crimeCategoryLookup, randomColorGenerator } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeCategoryChart = ({ crime, startDate }: CrimeChartProps) => {
  const chartObj = crimeCategoryLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);
  const colors = randomColorGenerator(valuesArray.length);

  console.log(colors + '.....loaded');

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

  const options = {
    legend: {
      position: 'left',
    },
  };

  return (
    <div>
      <h2>
        Crime stats for{' '}
        {startDate.toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })}{' '}
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CrimeCategoryChart;
