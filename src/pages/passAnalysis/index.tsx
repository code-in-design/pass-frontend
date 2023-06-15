import Layout from '@/components/Layout/Layout';
import ApplicationPossibilityAnalysisContainer from '@/features/passAnalysis/container/ApplicationPossibilityAnalysisContainer';
import UniversityInformationContainer from '@/features/passAnalysis/container/UniversityInformationContainer';
import styled from '@emotion/styled';
import React from 'react';

const PassAnalysisPage = () => {
  return (
    <Layout>
      <Wrapper>
        <ApplicationPossibilityAnalysisContainer />
        <UniversityInformationContainer />
      </Wrapper>
    </Layout>
  );
};

export default PassAnalysisPage;

const Wrapper = styled.div`
  display: flex;
  gap: 0 32px;
`;
