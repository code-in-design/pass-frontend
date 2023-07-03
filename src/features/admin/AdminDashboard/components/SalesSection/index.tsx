import styled from '@emotion/styled';
import { SalesChart } from './SalesChart';
import { WeeklySalesChart } from './WeeklySalesChart';
import { GradeAndSampleCounter } from './GradeAndSampleCounter';

interface Props {}

export const SalesSection = (props: Props) => {
  return (
    <SalesSectionWrapper>
      <SalesChart />
      <WeeklySalesChart />
      <GradeAndSampleCounter />
    </SalesSectionWrapper>
  );
};

const SalesSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
