import styled from '@emotion/styled';
import { InfoCardSection } from '../components/InfoCardSection';
import { SalesSection } from '../components/SalesSection';
import { BottomSection } from '../components/BottomSection';

export const DashboardContainer = () => {
  return (
    <DashboardWrapper>
      <Title>Main Dashboard</Title>
      <InfoCardSection />
      <SalesSection />
      <BottomSection />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Title = styled.div`
  color: var(--black, #191e25);
  font-size: 24px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
