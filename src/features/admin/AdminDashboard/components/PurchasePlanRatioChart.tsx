import theme from '@/theme/theme';
import { DoughnutChartWithLegend, DoughnutChartWithLegendData } from './DoughnutChartWithLegend';

interface PurchasePlanRatioChartProps {
  data?: DoughnutChartWithLegendData[];
}

export const PurchasePlanRatioChart = (props: PurchasePlanRatioChartProps) => {
  const { data } = props;
  return <DoughnutChartWithLegend title="구매 플랜 비율" data={data} />;
};

PurchasePlanRatioChart.defaultProps = {
  data: [
    { title: 'Light', value: 25, color: theme.colors.gray4 },
    { title: 'Basic', value: 25, color: theme.colors.green },
    { title: 'Premium', value: 50, color: theme.colors.blue },
  ],
};
