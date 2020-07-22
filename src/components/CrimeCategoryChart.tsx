import React from 'react';
import { crimeCategoryLookup } from '../utils/functions';
import { Doughnut } from 'react-chartjs-2';

const CrimeCategoryChart = ({ crime }: CrimeChartProps) => {
  const chartObj = crimeCategoryLookup(crime);

  //Chart data object
  const data = {
    labels: [
      'Anti-Social Behaviour',
      'Bicycle Theft',
      'Burglary',
      'Criminal Damage/Arson',
      'Other Crime',
      'Other Theft',
      'Public Order',
      'Shoplifting',
      'Vehicle Crime',
      'Violent Crime',
    ],
    datasets: [
      {
        data: [
          chartObj['anti-social-behaviour'],
          chartObj['bicycle-theft'],
          chartObj['burglary'],
          chartObj['criminal-damage-arson'],
          chartObj['other-crime'],
          chartObj['other-theft'],
          chartObj['public-order'],
          chartObj['shoplifting'],
          chartObj['vehicle-crime'],
          chartObj['violent-crime'],
        ],
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
