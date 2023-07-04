import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  percentages: number[];
  colors: string[];
  opt?: ChartOptions<'doughnut'>;
}

export function DoughnutChart(props: Props) {
  const { percentages, colors, opt } = props;

  const data = {
    datasets: [
      {
        data: [...percentages],
        backgroundColor: [...colors], // Light, Basic, Premium
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = opt
    ? opt
    : {
        spacing: 1,
        borderRadius: 4,
        cutout: 60,
      };

  return <Doughnut data={data} options={options} width="100%" height="100%" />;
}

DoughnutChart.defaultProps = {
  percentages: [25, 25, 50],
  colors: ['#60C8DE', '#E4E6F0', '#6B77F8'],
};
