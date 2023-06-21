import React from 'react';
import styled from '@emotion/styled';
import ProcessBar from '@/components/ProcessBar/ProcessBar';
import Chart from '../../../../public/images/icons/chart.svg';

const PassAnalysisProcess = () => {
  return (
    <Container>
      <ProcessBar img={<Chart />} text="합격분석 중입니다" />
    </Container>
  );
};

export default PassAnalysisProcess;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 190px 16px 0 24px;
  gap: 0 12px;
`;
