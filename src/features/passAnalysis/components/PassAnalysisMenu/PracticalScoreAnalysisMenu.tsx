import React from 'react';
import styled from '@emotion/styled';
import PracticalScoreAnalysisMenuItem from './PracticalScoreAnalysisMenuItem';

const PracticalScoreAnalysisMenu = () => {
  return (
    <Container>
      <TitleWrapper>
        <div>
          <Title>실기 점수 분석</Title>
        </div>
        <div>
          <span>
            남은 실기 변경 횟수 <span>5회</span>
          </span>
          <ChangeRecord>기록 변경하기</ChangeRecord>
        </div>
      </TitleWrapper>
      <PracticalScoreAnalysisMenuItem />
    </Container>
  );
};

export default PracticalScoreAnalysisMenu;

const Container = styled.div`
  margin-top: 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;

const ChangeRecord = styled.div`
  width: 80px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.colors.blue};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
  white-space: nowrap;
`;
