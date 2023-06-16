import React from 'react';
import styled from '@emotion/styled';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';

interface Props {
  type: string;
  bestScore: number;
  averageScore: number;
  perfectScore: number;
}

const ExpectedPracticalRecoredItem = (props: Props) => {
  const exerciseIcon = exerciseType[props.type] || { text: '-', icon: '' };
  return (
    <Container>
      <TitleWrapper>
        <IconWrapper>{exerciseIcon.icon}</IconWrapper>
        <Title>{exerciseIcon.text}</Title>
      </TitleWrapper>
      <Box>
        <ScoreWrapper>
          <ScoreBox>
            <ScoreTitle>최고 기록</ScoreTitle>
            <Score>{props.bestScore}</Score>
          </ScoreBox>
          <ScoreBox>
            <ScoreTitle>평균 기록</ScoreTitle>
            <Score>{props.averageScore}</Score>
          </ScoreBox>
          <ScoreBox>
            <ScoreTitle>만점 기록</ScoreTitle>
            <Score>{props.perfectScore}</Score>
          </ScoreBox>
        </ScoreWrapper>
        <Graph></Graph>
      </Box>
    </Container>
  );
};

export default ExpectedPracticalRecoredItem;

const Container = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0 4px;
  margin-bottom: 8px;
`;
const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
`;

const Box = styled.div`
  width: 100%;
  height: 92px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  display: flex;
  justify-content: space-between;
`;
const ScoreWrapper = styled.div`
  display: flex;
  gap: 0 8px;
`;

const ScoreBox = styled.div`
  min-width: 90px;
  height: 68px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  padding: 12px 0;
`;

const ScoreTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
`;
const Score = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.grayBlack};
`;

const Graph = styled.div`
  min-width: 221px;
  height: 68px;
`;
