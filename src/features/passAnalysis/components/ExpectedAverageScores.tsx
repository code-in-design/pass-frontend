import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SubjectSelection from '@/features/myScore/components/GradeInputForm/SubjectSelection';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';
import ExpectedAverageScoreItem from './ExpectedAverageScoreItem';

interface Props {
  isChoice: string[];
  // scores: {
  //   국어: { title: string; averageScore: number; score: number }[];
  //   수학: { title: string; averageScore: number; score: number }[];
  //   영어: { title: string; averageScore: number; score: number }[];
  //   탐구: { title: string; averageScore: number; score: number }[];
  // };
  scores: { title: string; averageScore: number; score: number }[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const ExpectedAverageScores = (props: Props) => {
  const [score, setScore] = useState<{ title: string; averageScore: number; score: number }[]>();
  let type = '';

  for (let i = 0; i <= props.isChoice.length; i++) {
    if (props.isChoice[i] === '국어') {
      type = 'korean';
    }
    if (props.isChoice[i] === '수학') {
      type = 'math';
    }
    if (props.isChoice[i] === '영어') {
      type = 'korean';
    }
    if (props.isChoice[i] === '탐구') {
      type = 'math';
    }
  }

  return (
    <>
      <TitleWrapper>
        <Title>예상 지원자 평균 성적 비교</Title>
        <Update>2023.12.05 update</Update>
      </TitleWrapper>
      <Container>
        <SubjectSelection type={type} isChoice={props.isChoice} register={props.register} setValue={props.setValue} isPassAnalysis={true} />
        <ScoreWrapper>
          {props.scores.map((item, index) => {
            return <ExpectedAverageScoreItem key={index} title={item.title} averageScore={item.averageScore} score={item.score} />;
          })}
        </ScoreWrapper>
      </Container>
    </>
  );
};

export default ExpectedAverageScores;
ExpectedAverageScores.defaultProps = {
  isChoice: ['국어', '수학', '영어', '탐구'],
  scores: [
    { title: '표준점수', averageScore: 120.5, score: 124 },
    { title: '백분위', averageScore: 89.5, score: 90 },
    { title: '등급', averageScore: 3.3, score: 3 },
  ],
  // scores: [
  //   {
  //     국어: [
  //       { title: '표준점수', averageScore: 120.5, score: 124 },
  //       { title: '백분위', averageScore: 89.5, score: 90 },
  //       { title: '등급', averageScore: 3.3, score: 3 },
  //     ],
  //   },
  //   {
  //     수학: [
  //       { title: '표준점수', averageScore: 120.5, score: 124 },
  //       { title: '백분위', averageScore: 89.5, score: 90 },
  //       { title: '등급', averageScore: 3.3, score: 3 },
  //     ],
  //   },
  //   {
  //     영어: [
  //       { title: '표준점수', averageScore: 0, score: 0 },
  //       { title: '백분위', averageScore: 0, score: 0 },
  //       { title: '등급', averageScore: 3.3, score: 3 },
  //     ],
  //   },
  //   {
  //     탐구: [
  //       { title: '백분위', averageScore: 89.5, score: 90 },
  //       { title: '등급', averageScore: 3.3, score: 3 },
  //     ],
  //   },
  // ],
};

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
