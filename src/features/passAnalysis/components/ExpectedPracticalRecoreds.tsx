import React from 'react';
import styled from '@emotion/styled';
import ExpectedPracticalRecoredItem from './ExpectedPracticalRecoredItem';

interface Props {
  data: { type: string; bestScore: number; averageScore: number; perfectScore: number; value: number }[];
}

const ExpectedPracticalRecoreds = (props: Props) => {
  return (
    <>
      <TitleWrapper>
        <Title>예상 지원자 실기 기록 비교</Title>
        <Update>2023.12.05 update</Update>
      </TitleWrapper>
      {props.data.map((item, index) => {
        return <ExpectedPracticalRecoredItem key={index} value={item.value} type={item.type} bestScore={item.bestScore} averageScore={item.averageScore} perfectScore={item.perfectScore} />;
      })}
    </>
  );
};

export default ExpectedPracticalRecoreds;
ExpectedPracticalRecoreds.defaultProps = {
  data: [
    { type: '제자리 멀리뛰기', bestScore: 120.5, averageScore: 250.5, perfectScore: 120.5, value: 50 },
    { type: '배근력', bestScore: 130.5, averageScore: 250.5, perfectScore: 120.5, value: 70 },
    { type: '매달리기', bestScore: 140.5, averageScore: 250.5, perfectScore: 120.5, value: 20 },
  ],
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
