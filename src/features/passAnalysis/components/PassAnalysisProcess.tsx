import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ProcessBar from '@/components/ProcessBar/ProcessBar';
import Chart from '../../../../public/images/icons/chart.svg';
import { useRouter } from 'next/router';

const PassAnalysisProcess = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push('/passAnalysis');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <Container>
          <ProcessBar img={<Chart />} text="합격분석 중입니다" iconSize="40px" iconMargin="0 0 8px" textJustify="flex-start" />
        </Container>
      )}
    </>
  );
};

export default PassAnalysisProcess;

const Container = styled.div`
  min-width: 563px;
  width: 100%;
  height: 636px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 81px;
`;
