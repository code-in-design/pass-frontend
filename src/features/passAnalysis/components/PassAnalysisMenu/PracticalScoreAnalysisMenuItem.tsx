import React from 'react';
import styled from '@emotion/styled';
import { exerciseProps } from '@/features/universities/components/FindUniversity/ExerciseType';

interface Props {
  title: string;
  record: string;
  score: string;
}

const PracticalScoreAnalysisMenuItem = (props: Props) => {
  const exerciseIcon = exerciseProps[props.title] || { text: '-', icon: '' };
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <IconWrapper>{exerciseIcon.icon}</IconWrapper>
          <Title>{props.title}</Title>
        </TitleWrapper>
        <Record>{props.record}</Record>
      </Wrapper>
      <div>
        <Wrapper>
          <ScoreTitle>취득점수</ScoreTitle>
          <Score>{props.score}</Score>
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
