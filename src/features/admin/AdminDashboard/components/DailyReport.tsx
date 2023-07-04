import styled from '@emotion/styled';
import { Table } from './Table';

export const DailyReport = () => {
  return (
    <DailyReportWrapper>
      <Title>일자별 요약</Title>
      <Table />
    </DailyReportWrapper>
  );
};

const DailyReportWrapper = styled.div`
  display: flex;
  padding: 24px;
  width: 439px;
  min-width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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
