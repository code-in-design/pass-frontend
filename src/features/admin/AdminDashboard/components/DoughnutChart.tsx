import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartWithLegendData } from './DoughnutChartWithLegend';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: DoughnutChartWithLegendData[];
  options?: ChartOptions<'doughnut'>;
}

export function DoughnutChart(props: Props) {
  const rawData = props.data;

  const percentages = useMemo(() => rawData.map(data => data.value), [rawData]);
  const colors = useMemo(() => rawData.map(data => data.color), [rawData]);

  const data = {
    datasets: [
      {
        data: percentages,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    spacing: 1,
    borderRadius: 4,
    cutout: 60,
    ...props.options,
  };
  return <Doughnut data={data} options={options} width="100%" height="100%" />;
}

DoughnutChart.defaultProps = {
  percentages: [25, 25, 50],
  colors: ['#60C8DE', '#E4E6F0', '#6B77F8'],
};
