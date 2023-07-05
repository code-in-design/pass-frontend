import { DoughnutChartWithLegend, DoughnutChartWithLegendData } from './DoughnutChartWithLegend';

interface PurchasePlanRatioChartProps {
  data?: DoughnutChartWithLegendData[];
}

export const PurchasePlanRatioChart = (props: PurchasePlanRatioChartProps) => {
  const { data } = props;
  return <DoughnutChartWithLegend title="구매 플랜 비율" data={data} upsideDown={true} />;
};

PurchasePlanRatioChart.defaultProps = {};
