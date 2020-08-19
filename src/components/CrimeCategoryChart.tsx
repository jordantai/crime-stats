import React, { useRef } from 'react';
import { crimeCategoryLookup, randomColorGenerator } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeCategoryChart = ({ crime, startDate }: CrimeChartProps) => {
  const chartObj = crimeCategoryLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);
  const colors = useRef(randomColorGenerator(50));

  //Chart data object
  const data = {
    labels: [...keysArray],
    datasets: [
      {
        data: [...valuesArray],
        backgroundColor: [...colors.current],
        hoverBackgroundColor: [...colors.current],
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
