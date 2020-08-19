import React, { useRef } from 'react';
import { crimeOutcomeLookup, randomColorGenerator } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeOutcomeChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeOutcomeLookup(crime);
  const keysArray = Object.keys(chartObj);
  const valuesArray = Object.values(chartObj);
  const colors = useRef(randomColorGenerator(50));

  // chart data object
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
      <h2>Outcome Wheel</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CrimeOutcomeChart;
