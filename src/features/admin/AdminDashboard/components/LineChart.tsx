import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions, TimeScale, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, Filler);

interface Props {
  width: number;
  height: number;
}

export function LineChart(props: Props) {
  const { width, height } = props;
  const data: ChartData<'line', { x: string; y: number }[]> = {
    datasets: [
      {
        data: [
          { x: '2022-11-01', y: 20 },
          { x: '2022-11-02', y: 20 },
          { x: '2022-11-03', y: 20 },
          { x: '2022-11-04', y: 20 },
          { x: '2022-11-05', y: 20 },
          { x: '2022-11-06', y: 20 },
          { x: '2022-11-07', y: 20 },
          { x: '2022-11-08', y: 20 },
          { x: '2022-11-09', y: 20 },
          { x: '2022-11-15', y: 20 },
          { x: '2022-12-01', y: 30 },
          { x: '2022-12-15', y: 25 },
          { x: '2023-01-01', y: 20 },
          { x: '2023-02-01', y: 30 },
        ],
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 1.73,
        borderColor: '#6B77F8',
        fill: {
          target: 'origin',
          below: 'linear-gradient(180deg, rgba(107, 119, 248, 0.15) 41.67%, rgba(255, 255, 255, 0) 109.45%)',
        },
        backgroundColor: context => {
          const bgColor = ['rgba(107, 119, 248, 0.15)', 'rgba(255, 255, 255, 0)'];
          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0.5, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        },
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'M',
          },
          parser: 'YYYY-MM-DD',
          tooltipFormat: 'YYYY-MM-DD',
          minUnit: 'month',
        },
        grid: {
          display: false,
          drawTicks: true,
        },
        ticks: {
          display: true,
          font: {
            size: 14,
            family: 'Pretendard',
            weight: '700',
          },
          padding: 0,
          color: 'rgba(147, 149, 166, 1)',
        },
        border: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 1,
        bottom: 0,
      },
    },
  };

  return <Line options={options} data={data} width={width} height={height} />;
}

LineChart.defaultProps = {
  width: 391,
  height: 120,
};
