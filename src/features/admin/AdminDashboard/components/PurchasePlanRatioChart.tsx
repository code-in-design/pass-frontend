import styled from '@emotion/styled';
import { PieChart } from 'react-minimal-pie-chart';

interface Props {
  data: {
    title: string;
    value: number;
    color: string;
  }[];
}

export const PurchasePlanRatioChart = (props: Props) => {
  const { data } = props;
  return (
    <PurchasePlanRatioChartWrapper>
      <Title>구매 플랜 비율</Title>
      <PieChartWrraper>
        <PieChart data={data} style={{ width: '100%', height: '100%' }} />
      </PieChartWrraper>
    </PurchasePlanRatioChartWrapper>
  );
};

PurchasePlanRatioChart.defaultProps = {
  data: [
    { title: 'Basic', value: 25, color: 'rgba(228, 230, 240, 1)' },
    { title: 'Light', value: 25, color: 'rgba(96, 200, 222, 1)' },
    { title: 'Premium', value: 50, color: 'rgba(107, 119, 248, 1)' },
  ],
};

const PurchasePlanRatioChartWrapper = styled.div`
  display: flex;
  height: 348px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 16px;
  background: var(--gray-white, #fff);
`;

const Title = styled.span`
  color: var(--gray-black, #353644);
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const PieChartWrraper = styled.div`
  height: 198px;
  flex-shrink: 0;
  align-self: stretch;
`;
