import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ExpectedAverageScoreItem from './ExpectedAverageScoreItem';

interface Props {
  choices: string[];
  scores: {
    국어: { title: string; averageScore: number; score: number }[];
    수학: { title: string; averageScore: number; score: number }[];
    영어: { title: string; averageScore: number; score: number }[];
    탐구: { title: string; averageScore: number; score: number }[];
  };
}

interface ItemProps {
  selected: boolean;
  text: string;
  handleClick: () => void;
}

const ChoiceItems = (props: ItemProps) => {
  const Component = props.selected ? ChoiceItemSelect : ChoiceItem;

  return <Component onClick={props.handleClick}>{props.text}</Component>;
};

const ExpectedAverageScores = (props: Props) => {
  const [score, setScore] = useState<{ title: string; averageScore: number; score: number }[]>(props.scores.국어);
  const [selectedItem, setSelectedItem] = useState(props.choices[0]);

  const handleItemClick = item => {
    setSelectedItem(item);
    if (item === '국어') {
      setScore(props.scores.국어);
    }
    if (item === '수학') {
      setScore(props.scores.수학);
    }
    if (item === '영어') {
      setScore(props.scores.영어);
    }
    if (item === '탐구') {
      setScore(props.scores.탐구);
    }
  };

  return (
    <>
      <TitleWrapper>
        <Title>예상 지원자 평균 성적 비교</Title>
        <Update>2023.12.05 update</Update>
      </TitleWrapper>
      <Container>
        <ChoiceContainer>
          {props.choices.map((item, index) => {
            return <ChoiceItems key={item} text={item} selected={item === selectedItem} handleClick={() => handleItemClick(item)} />;
          })}
        </ChoiceContainer>
        <ScoreWrapper>
          {score.map((item, index) => {
            return <ExpectedAverageScoreItem key={index} title={item.title} averageScore={item.averageScore} score={item.score} />;
          })}
        </ScoreWrapper>
      </Container>
    </>
  );
};

ExpectedAverageScores.defaultProps = {
  choices: ['국어', '수학', '영어', '탐구'],
  scores: {
    국어: [
      { title: '표준점수', averageScore: 120.5, score: 124 },
      { title: '백분위', averageScore: 89.5, score: 90 },
      { title: '등급', averageScore: 3.3, score: 3 },
    ],

    수학: [
      { title: '표준점수', averageScore: 120.5, score: 124 },
      { title: '백분위', averageScore: 89.5, score: 90 },
      { title: '등급', averageScore: 3.3, score: 3 },
    ],

    영어: [
      { title: '표준점수', averageScore: 0, score: 0 },
      { title: '백분위', averageScore: 0, score: 0 },
      { title: '등급', averageScore: 3.3, score: 3 },
    ],

    탐구: [
      { title: '백분위', averageScore: 89.5, score: 90 },
      { title: '등급', averageScore: 3.3, score: 3 },
    ],
  },
};
export default ExpectedAverageScores;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 32px;
  &:first-of-type {
    margin-top: 24px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;

const Update = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray3};
`;

const Container = styled.div`
  padding: 16px;
  min-width: 563px;
  height: 184px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
`;

const ScoreWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 0 12px;
`;

const ChoiceContainer = styled.div`
  width: 256px;
  display: flex;
  height: 36px;
  border-radius: 57px;
  background-color: ${props => props.theme.colors.gray5};
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
  padding: 2px;
`;

const ChoiceItem = styled.div`
  padding: 8px 19.5px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.gray2};
`;

const ChoiceItemSelect = styled.div`
  padding: 8px 19.5px;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  border-radius: 16px;
  cursor: pointer;
`;
