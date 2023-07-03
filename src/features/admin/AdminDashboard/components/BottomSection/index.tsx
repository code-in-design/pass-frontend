import styled from '@emotion/styled';
import { DailySummary } from './DailySummary';

export const BottomSection = () => {
  return (
    <BottomSectionWrapper>
      {/* 일자별 요약 */}
      <DailySummary />
      {/* 파이 차트 */}

      {/* 파이 차트 */}
    </BottomSectionWrapper>
  );
};

const BottomSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
