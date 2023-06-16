import React from 'react';
import styled from '@emotion/styled';

const ExpectedAverageScores = () => {
  return (
    <>
      <TitleWrapper>
        <Title>예상 지원자 평균 성적 비교</Title>
        <Update>2023.12.05 update</Update>
      </TitleWrapper>
      <Container></Container>
    </>
  );
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
  min-width: 563px;
  height: 184px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
`;
