import React from 'react';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import UniversityCategoryList from '@/features/universities/components/FindUniversity/UniversityCategoryList';
import UniversitySearchContainer from '@/features/universities/containers/UniversitySearchContainer';
import UniversityTableContainer from '@/features/universities/containers/UniversityTableContainer';
import UniversityFilterModalContainer from '@/features/universities/containers/UniversitySettingFilterModalContainer';

const FindUniversityPage = () => {
  return (
    <Layout>
      <Container>
        <Title>대학 찾기</Title>
        <UniversityCategoryList />
        <Wrapper>
          <UniversitySearchContainer />
          <UniversityFilterModalContainer size="md" />
        </Wrapper>
        <UniversityTableContainer />
      </Container>
    </Layout>
  );
};

export default FindUniversityPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px 8px 24px 24px;
  overflow: auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
