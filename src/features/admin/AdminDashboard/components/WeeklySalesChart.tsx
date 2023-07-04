import styled from '@emotion/styled';
import { BarChart } from './BarChart';

export const WeeklySalesChart = () => {
  return (
    <WeeklySalesChartWrapper>
      <TitleWrapper>
        <Title>주간 매출 현황</Title>
      </TitleWrapper>
      <BarChart />
    </WeeklySalesChartWrapper>
  );
};

const WeeklySalesChartWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: var(--gray-white, #fff);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
