import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { DoughnutChart } from './DoughnutChart';

interface Props {
  data: {
    title: string;
    value: number;
    color: string;
    segment: ReactNode;
  }[];
}

export const PurchasePlanRatioChart = (props: Props) => {
  const { data } = props;
  return (
    <PurchasePlanRatioChartWrapper>
      <Title>구매 플랜 비율</Title>
      <DoughnutChartWrapper>
        <DoughnutChart />
      </DoughnutChartWrapper>
      {/* <PieChartWrraper>
        <PieChart data={data} style={{ width: '100%', height: '100%' }} lengthAngle={360} startAngle={90} lineWidth={30} />
      </PieChartWrraper> */}
      <Legend>
        {data.map((item, index) => {
          return (
            <LegndItem key={index}>
              <Marker backgroundColor={item.color} />
              <Label>{item.title}</Label>
            </LegndItem>
          );
        })}
      </Legend>
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
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const PieChartWrraper = styled.div`
  height: 198px;
  flex-shrink: 0;
  align-self: stretch;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

const LegndItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Marker = styled.div<{ backgroundColor: string }>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Label = styled.span`
  color: var(--gray-1, #626474);
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const DoughnutChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 198px;
`;