import styled from '@emotion/styled';
import { LineChart } from './LineChart';

interface Props {}

export const SalesChart = (props: Props) => {
  return (
    <SalesChartWrapper>
      <TitleWrapper>
        <Title>매출 현황</Title>
        <ProfitBadge>
          <Profit>+24.24</Profit>
        </ProfitBadge>
      </TitleWrapper>
      <ChartWrapper>
        <LineChart />
      </ChartWrapper>
    </SalesChartWrapper>
  );
};

const SalesChartWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
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

const ProfitBadge = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: rgba(96, 200, 222, 0.1);
`;

const Profit = styled.span`
  color: var(--green-deep, #45bfd9);
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
