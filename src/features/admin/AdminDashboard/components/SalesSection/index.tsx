import styled from '@emotion/styled';
import { SalesChart } from './SalesChart';
import { WeeklySalesChart } from './WeeklySalesChart';
import { TodayInputSummary } from './TodayInputSummary';

interface Props {}

export const SalesSection = (props: Props) => {
  return (
    <SalesSectionWrapper>
      <SalesChart />
      <WeeklySalesChart />
      <TodayInputSummary />
    </SalesSectionWrapper>
  );
};

const SalesSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
