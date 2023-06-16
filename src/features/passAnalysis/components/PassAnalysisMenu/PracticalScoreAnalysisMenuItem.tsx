import React from 'react';
import styled from '@emotion/styled';

const PracticalScoreAnalysisMenuItem = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <IconWrapper></IconWrapper>
          <Title>제자리 멀리 뛰기</Title>
        </TitleWrapper>
        <Record>280cm</Record>
      </Wrapper>
      <div>
        <Wrapper>
          <ScoreTitle>취득점수</ScoreTitle>
          <Score>100</Score>
        </Wrapper>
      </div>
    </Container>
  );
};

export default PracticalScoreAnalysisMenuItem;

const Container = styled.div`
  height: 64px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.gray6};
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0 2px;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.blue};
  background-color: black;
`;

const Title = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.gray1};
  font-weight: 600;
`;

const Record = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayBlack};
`;

const ScoreTitle = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  color: ${props => props.theme.colors.gray2};
`;

const Score = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;
