import React, { useState } from 'react';
import { useQueryParam } from 'use-query-params';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import { BookmarkContainer } from '@/features/passAnalysis/container/BookmarkContainer';
import PassAnalysisContainer from '@/features/passAnalysis/container/PassAnalysisContainer';
import TestScoreAnalysisContainer from '@/features/passAnalysis/container/TestScoreAnalysisContainer';
import PracticalScoreAnalysisContainer from '@/features/passAnalysis/container/PracticalScoreAnalysisContainer';
import LastYearPassCaseContainer from '@/features/passAnalysis/container/LastYearPassCaseContainer';
import DepartmentInformation from '@/features/passAnalysis/components/DepartmentInformation';
import NoAnalysisUniversity from '@/features/passAnalysis/components/NoAnalysisUniversity';
import NoSelectAnalysisUniversity from '@/features/passAnalysis/components/NoSelectAnalysisUniversity';
import ExpectedAverageScoresContainer from '@/features/passAnalysis/container/ExpectedAverageScoresContainer';
import ExpectedPracticalRecordsContainer from '@/features/passAnalysis/container/ExpectedPracticalRecordsContainer';
import UniversitySettingFilterModalContainer from '../../features/universities/containers/UniversitySettingFilterModalContainer';
import PassAnalysisSearchContainer from '@/features/passAnalysis/container/PassAnalysisSearchContainer';

const PassAnalysisPage = () => {
  const [menu, setMenu] = useQueryParam('menu');
  // const isMenuSelected

  return (
    <Layout>
      <Wrapper>
        <ApplicationPossibilityAnalysisContainer>
          <AnalysisTitleWrapper>
            <AnalysisTitle>지원 가능 분석</AnalysisTitle>
            <UniversitySettingFilterModalContainer size="sm" />
          </AnalysisTitleWrapper>
          <PassAnalysisSearchContainer />
        </ApplicationPossibilityAnalysisContainer>

        <UniversityInformation>
          <>
            {!menu && <NoSelectAnalysisUniversity />}

            {menu && (
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
                  <MenuItem
                    onClick={() => {
                      setMenu('passAnalysis');
                    }}
                    style={
                      menu === 'passAnalysis'
                        ? {
                            fontWeight: 700,
                            color: '#191E25',
                            borderBottom: '3px solid #6B77F8',
                          }
                        : {}
                    }
                  >
                    합격 분석
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setMenu('candidateStatus');
                    }}
                    style={
                      menu === 'candidateStatus'
                        ? {
                            fontWeight: 700,
                            color: '#191E25',
                            borderBottom: '3px solid #6B77F8',
                          }
                        : {}
                    }
                  >
                    지원자 현황
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setMenu('departmentInfromation');
                    }}
                    style={
                      menu === 'departmentInfromation'
                        ? {
                            fontWeight: 700,
                            color: '#191E25',
                            borderBottom: '3px solid #6B77F8',
                          }
                        : {}
                    }
                  >
                    학과 정보
                  </MenuItem>
                </Menu>
              </>
            )}

            {menu === 'passAnalysis' && (
              <>
                <PassAnalysisContainer />
                <TestScoreAnalysisContainer />
                <PracticalScoreAnalysisContainer name="경상대학교 체육교육과" subTitle="수능 일반 전형" />
                <LastYearPassCaseContainer />
                {/* 서비스하지 않는 대학일 경우 */}
                <NoAnalysisUniversity />
              </>
            )}
            {menu === 'candidateStatus' && (
              <>
                <ExpectedAverageScoresContainer />
                <ExpectedPracticalRecordsContainer />
              </>
            )}
            {menu === 'departmentInfromation' && <DepartmentInformation name="경상대학교 체육교육과" subTitle="수능 일반 전형" />}
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

const ApplicationPossibilityAnalysisContainer = styled.div`
  min-width: 397px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  flex: 1;
`;

const AnalysisTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AnalysisTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;

const UniversityInformation = styled.div`
  min-width: 611px;
  height: 792px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  flex: 1.5;
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
  margin-bottom: 24px;
`;

const MenuItem = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
  padding: 16px;
  cursor: pointer;
  position: relative;
  :last-of-type {
    border-right: none;
  }
  ::before {
    content: '|';
    color: ${props => props.theme.colors.gray4};
    line-height: 18px;
    position: absolute;
    left: 0;
  }
  :first-of-type {
    ::before {
      content: none;
    }
  }
`;
