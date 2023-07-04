import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions, BarController } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

export function BarChart() {
  const data: ChartData<'bar', { x: string; y: number }[]> = {
    datasets: [
      {
        data: [
          { x: '2023-02-18', y: 20 },
          { x: '2023-02-19', y: 20 },
          { x: '2023-02-20', y: 30 },
          { x: '2023-02-21', y: 25 },
          { x: '2023-02-22', y: 20 },
          { x: '2023-02-23', y: 30 },
          { x: '2023-02-24', y: 30 },
        ],
        borderWidth: 0,
        borderColor: '#6B77F8',
        backgroundColor: context => {
          const bgColor = ['rgba(107, 119, 248, 1)', 'rgba(197, 234, 255, 1)'];
          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0.4, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        },
        barThickness: 10,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'D',
          },
          parser: 'YYYY-MM-DD',
          tooltipFormat: 'YYYY-MM-DD',
          minUnit: 'day',
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
        offset: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 16,
        borderSkipped: false,
      },
    },
    layout: {
      padding: {
        top: 16,
      },
    },
  };

  return <Bar options={options} data={data} width={391} height={147} />;
}
