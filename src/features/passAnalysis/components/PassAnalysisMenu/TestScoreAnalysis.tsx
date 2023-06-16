import React from 'react';
import styled from '@emotion/styled';
import Table from '@/components/Table';
import useScores from '@/features/myScore/hooks/useScores';

const TestScoreAnalysis = () => {
  const { transcript } = useScores();
  return (
    <Container>
      <Title>수능 점수 분석</Title>
      <Table transcript={transcript!} />
    </Container>
  );
};

export default TestScoreAnalysis;

const Container = styled.div`
  margin-top: 32px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;
