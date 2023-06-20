import React from 'react';
import styled from '@emotion/styled';
import ArrowNorth from '../../../../public/images/icons/arrowNorth.svg';

interface Props {
  title: string;
  averageScore: number;
  score: number;
}

const ExpectedAverageScoreItem = (props: Props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <AverageScoreWrapper>
        <AverageScore>{props.averageScore}</AverageScore>
        <IconWrapper>
          <ArrowNorth />
        </IconWrapper>
      </AverageScoreWrapper>
      <Score>{props.score}</Score>
    </Container>
  );
};

export default ExpectedAverageScoreItem;

const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: ${props => props.theme.colors.gray6};
  height: 100px;
`;
const Title = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.gray1};
`;

const AverageScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
`;

const AverageScore = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;

const IconWrapper = styled.div`
  margin-left: 7px;
`;

const Score = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
`;
