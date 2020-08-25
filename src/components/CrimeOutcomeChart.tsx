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
      <h2 className="chart-title">Crime Outcomes</h2>
      <Doughnut data={data} options={options} width={780} height={780} />
    </div>
  );
};

export default CrimeOutcomeChart;
