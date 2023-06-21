import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ProcessBar from '@/components/ProcessBar/ProcessBar';
import Chart from '../../../../public/images/icons/chart.svg';
import { useRouter } from 'next/router';

const PassAnalysisProcess = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const setFakeLoading = async () => {
    //합격 분석중을 표현하기 위해 일부러 3초간 로딩한다.
    const timeout: Promise<boolean> = new Promise(resolve =>
      setTimeout(() => {
        resolve(false);
      }, 3000),
    );
    setLoading(true);
    const result = await timeout;
    setLoading(result);
  };

  if (loading) router.push('/passAnalysis');

  return (
    <>
      {!loading && (
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
