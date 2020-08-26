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
      position: 'bottom',
      align: 'start',
      labels: {
        fontColor: '#fff',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2 className="chart-title">
        Crimes in{' '}
        {startDate.toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })}{' '}
      </h2>
      <h3>Key stats</h3>
      <Doughnut data={data} options={options} width={500} height={500} />
    </div>
  );
};

export default CrimeCategoryChart;
