import Layout from '@/components/Layout/Layout';
import ApplicationPossibilityAnalysisContainer from '@/features/passAnalysis/container/ApplicationPossibilityAnalysisContainer';
import { BookmarkContainer } from '@/features/passAnalysis/container/BookmarkContainer';
import React from 'react';
import styled from '@emotion/styled';
import PassAnalysisContainer from '@/features/passAnalysis/container/PassAnalysisContainer';
import TestScoreAnalysisContainer from '@/features/passAnalysis/container/TestScoreAnalysisContainer';
import PracticalScoreAnalysisContainer from '@/features/passAnalysis/container/PracticalScoreAnalysisContainer';
import LastYearPassCaseContainer from '@/features/passAnalysis/container/LastYearPassCaseContainer';
import { useQueryParam } from 'use-query-params';
import DepartmentInformation from '@/features/passAnalysis/components/DepartmentInformation';
import NoAnalysisUniversity from '@/features/passAnalysis/components/NoAnalysisUniversity';
import NoSelectAnalysisUniversity from '@/features/passAnalysis/components/NoSelectAnalysisUniversity';

const PassAnalysisPage = () => {
  const [tabMenu, setTabMenu] = useQueryParam('tabMenu');
  console.log(tabMenu);
  return (
    <Layout>
      <Wrapper>
        <ApplicationPossibilityAnalysisContainer />
        <UniversityInformation>
          <>
            {tabMenu && (
              <>
                <Header>
                  <TitleWrapper>
                    <Title>경상대학교 체육교육과</Title>
                    <SubTitle>수능 일반 전형</SubTitle>
                  </TitleWrapper>
                  <SideHeader>
                    <RecruitmentGroup>가군</RecruitmentGroup>
                    <BookmarkContainer />
                  </SideHeader>
                </Header>
                <Menu>
                  <MenuItem onClick={() => setTabMenu(1)}>합격 분석</MenuItem>
                  <MenuItem onClick={() => setTabMenu(2)}>지원자 현황</MenuItem>
                  <MenuItem onClick={() => setTabMenu(3)}>학과 정보</MenuItem>
                </Menu>
              </>
            )}

            {!tabMenu && <NoSelectAnalysisUniversity />}
            {tabMenu === '1' && (
              <>
                <PassAnalysisContainer />
                <TestScoreAnalysisContainer />
                <PracticalScoreAnalysisContainer name="경상대학교 체육교육과" subTitle="수능 일반 전형" />
                <LastYearPassCaseContainer />
                {/* 서비스하지 않는 대학일 경우 */}
                <NoAnalysisUniversity />
              </>
            )}
            {tabMenu === '3' && <DepartmentInformation name="경상대학교 체육교육과" subTitle="수능 일반 전형" />}
          </>
        </UniversityInformation>
      </Wrapper>
    </Layout>
  );
};

export default PassAnalysisPage;

const Wrapper = styled.div`
  display: flex;
  gap: 0 32px;
`;

const UniversityInformation = styled.div`
  min-width: 611px;
  height: 792px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.theme.colors.black};
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.gray2};
`;

const SideHeader = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;

const RecruitmentGroup = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
  margin-bottom: 24px;
`;

const MenuItem = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
  border-right: 1px solid ${props => props.theme.colors.gray4};
  cursor: pointer;
  :last-of-type {
    border-right: none;
  }
`;
