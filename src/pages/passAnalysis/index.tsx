import React, { useEffect, useState } from 'react';
import { useQueryParam } from 'use-query-params';
import styled from '@emotion/styled';
import Layout from '@/components/Layout/Layout';
import { BookmarkContainer } from '@/features/passAnalysis/container/BookmarkContainer';
import PassProbabilityContainer from '@/features/passAnalysis/container/PassProbabilityContainer';
import TestScoreAnalysisContainer from '@/features/passAnalysis/container/TestScoreAnalysisContainer';
import PracticalScoreAnalysisContainer from '@/features/passAnalysis/container/PracticalScoreAnalysisContainer';
import LastYearPassCaseContainer from '@/features/passAnalysis/container/LastYearPassCaseContainer';
import DepartmentInformation from '@/features/passAnalysis/components/DepartmentInformation';
import NoServiceUniversity from '@/features/passAnalysis/components/NoServiceUniversity';
import NoSelectAnalysisUniversity from '@/features/passAnalysis/components/NoSelectAnalysisUniversity';
import ExpectedAverageScoresContainer from '@/features/passAnalysis/container/ExpectedAverageScoresContainer';
import ExpectedPracticalRecordsContainer from '@/features/passAnalysis/container/ExpectedPracticalRecordsContainer';
import UniversitySettingFilterModalContainer from '../../features/universities/containers/UniversitySettingFilterModalContainer';
import PassAnalysisSearchContainer from '@/features/passAnalysis/container/PassAnalysisSearchContainer';
import PassAnalysisUniversityListsContainer from '@/features/passAnalysis/container/PassAnalysisUniversityListsContainer';
import NoMembershipContainer from '@/features/passAnalysis/container/NoMembershipContainer';
import UpdateUniversityAnalysisContainer from '@/features/passAnalysis/container/UpdateUniversityAnalysisContainer';
import PracticalScoreInputContainer from '@/features/passAnalysis/container/PracticalScoreInputContainer';
import NaesinScoreContainer from '@/features/passAnalysis/container/NaesinScoreContainer';
import useScores from '@/features/myScore/hooks/useScores';
import { useRouter } from 'next/router';
import { NaesinScoreProvider } from '@/features/passAnalysis/context/useNaesinScoreContext';

const PassAnalysisPage = () => {
  const [menu, setMenu] = useQueryParam('menu');
  const [selectedMenu, setSelectedMenu] = useState([true, false, false]);
  const [selectedUniversity] = useQueryParam('university');
  const { isBeforeScoreEnteredOnBackend, isAfterScoreEnteredOnBackend, 가채점기간, 성적발표후 } = useScores();
  const [isMembership, setIsMembership] = useState(true);
  const [isNoServiceUniversity, setIsNoServiceUniversity] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (selectedUniversity) {
      setMenu('passAnalysis');
    }
  }, [selectedUniversity]);

  return (
    <Layout>
      <Wrapper>
        <ApplicationPossibilityAnalysisContainer>
          <AnalysisTitleWrapper>
            <AnalysisTitle>지원 가능 분석</AnalysisTitle>
            <UniversitySettingFilterModalContainer size="sm" />
          </AnalysisTitleWrapper>
          <PassAnalysisSearchContainer />
          <PassAnalysisUniversityListsContainer />
        </ApplicationPossibilityAnalysisContainer>

        <UniversityInformation>
          <>
            {!selectedUniversity && <NoSelectAnalysisUniversity />}
            {selectedUniversity && (
              <>
                <Header>
                  <TitleWrapper>
                    <Title>{String(selectedUniversity)}</Title>
                    <SubTitle>수능 일반 전형</SubTitle>
                  </TitleWrapper>
                  <SideHeader>
                    <RecruitmentGroup>가군</RecruitmentGroup>
                    <BookmarkContainer />
                  </SideHeader>
                </Header>
                <Menu>
                  <MenuItem
                    selectedMenu={selectedMenu[0]}
                    onClick={() => {
                      setMenu('passAnalysis');
                      setSelectedMenu([true, false, false]);
                    }}
                  >
                    합격 분석
                  </MenuItem>
                  <MenuItem
                    selectedMenu={selectedMenu[1]}
                    onClick={() => {
                      setMenu('candidateStatus');
                      setSelectedMenu([false, true, false]);
                    }}
                  >
                    지원자 현황
                  </MenuItem>
                  <MenuItem
                    selectedMenu={selectedMenu[2]}
                    onClick={() => {
                      setMenu('departmentInfromation');
                      setSelectedMenu([false, false, true]);
                    }}
                  >
                    학과 정보
                  </MenuItem>
                </Menu>
              </>
            )}

            {menu === 'passAnalysis' && (
              <>
                {isMembership && (
                  <UniversityInfoWrapper>
                    <PassProbabilityContainer />
                    <TestScoreAnalysisContainer />
                    <PracticalScoreAnalysisContainer name={String(selectedUniversity)} subTitle="수능 일반 전형" remainChange={1} />
                    <LastYearPassCaseContainer />
                  </UniversityInfoWrapper>
                )}
                {/* 세부 합격 분석업데이트예정일 경우 */}
                {/* <UpdateUniversityAnalysisContainer /> */}
                {/* 실기기록입력 */}
                {/* <PracticalScoreInputContainer /> */}
                {/* 내신성적입력 */}
                <NaesinScoreProvider>
                  <NaesinScoreContainer />
                </NaesinScoreProvider>
                {/* {!isNoServiceUniversity && <NoServiceUniversity />} */}
                {/* {!isMembership && <NoMembershipContainer />} */}
              </>
            )}
            {menu === 'candidateStatus' && (
              <>
                {isMembership && (
                  <UniversityInfoWrapper>
                    <ExpectedAverageScoresContainer />
                    <ExpectedPracticalRecordsContainer />
                  </UniversityInfoWrapper>
                )}
                {/* {!isMembership && <NoMembershipContainer />} */}
              </>
            )}
            {menu === 'departmentInfromation' && <DepartmentInformation name={String(selectedUniversity)} subTitle="수능 일반 전형" />}
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
  padding: 24px 8px;
  flex: 1;
`;

const AnalysisTitleWrapper = styled.div`
  min-width: 349px;
  padding: 0 16px;
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
`;

const MenuItem = styled.div<{ selectedMenu: boolean }>`
  flex: 1;
  font-weight: ${props => (props.selectedMenu ? 700 : 600)};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => (props.selectedMenu ? props.theme.colors.grayBlack : props.theme.colors.gray2)};
  border-bottom: ${props => (props.selectedMenu ? `3px solid #6B77F8` : `1px solid  #e4e6f0`)};
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

const UniversityInfoWrapper = styled.div`
  width: 100%;
  padding-right: 8px;
  max-height: 636px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 14px;
    background-color: ${props => props.theme.colors.gray4};
  }
`;
