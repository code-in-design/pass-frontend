import { DoughnutChartWithLegend, DoughnutChartWithLegendData } from './DoughnutChartWithLegend';
import { ChartOptions } from 'chart.js';

interface UserRatioChartProps {
  data: DoughnutChartWithLegendData[];
  options?: ChartOptions<'doughnut'>;
}

export const UserRatioChart = (props: UserRatioChartProps) => {
  const { data, options } = props;
  return <DoughnutChartWithLegend title="사용자 비율" data={data} options={options} legendWidth="180px" />;
};

UserRatioChart.defaultProps = {
  data: [
    { title: '고1', value: 25, color: '#60C8DE' },
    { title: '고2', value: 25, color: '#6B77F8' },
    { title: '고3', value: 25, color: '#AA83FF' },
    { title: '학부모', value: 12.5, color: '#E4E6F0' },
    { title: '교육자', value: 12.5, color: '#F3F4FA' },
  ],
  options: {
    spacing: 1,
    borderRadius: 4,
    cutout: 60,
    rotation: -90,
  },
};
