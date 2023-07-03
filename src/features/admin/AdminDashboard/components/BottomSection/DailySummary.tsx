import styled from '@emotion/styled';

export const DailySummary = () => {
  return (
    <DailySummaryWrapper>
      <Title>일자별 요약</Title>
    </DailySummaryWrapper>
  );
};

const DailySummaryWrapper = styled.div`
  display: flex;
  width: 439px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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
