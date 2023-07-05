import theme from '@/theme/theme';
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
    { title: '고1', value: 25, color: theme.colors.green },
    { title: '고2', value: 25, color: theme.colors.blue },
    { title: '고3', value: 25, color: theme.colors.purple },
    { title: '학부모', value: 12.5, color: theme.colors.gray4 },
    { title: '교육자', value: 12.5, color: theme.colors.gray5 },
  ],
  options: {
    rotation: -90,
  },
};
