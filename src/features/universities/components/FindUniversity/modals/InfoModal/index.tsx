import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import ModalLayout from '@/components/Modal/ModalLayout';
import Info from '../../../../../../../public/images/icons/info.svg';
import HelpOutline from '../../../../../../../public/images/icons/helpOutline.svg';
import LoudSpeaker from '../../../../../../../public/images/icons/Loudspeaker.svg';
import Calendar from '../../../../../../../public/images/icons/calendar.svg';
import School from '../../../../../../../public/images/icons/school.svg';
import Book from '../../../../../../../public/images/icons/book.svg';
import NoticeBoard from '../../../../../../../public/images/icons/noticeBoard.svg';
import MyTooltip from '@/components/Tooltip';
import UniversityScoreModalContainer from '@/features/universities/containers/UniversityScoreModalContainer';

interface Props {
  name: string;
  subTitle: string;
  competition: string;
}

const UniversityInfoModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  return (
    <>
      <button onClick={openModal}>학교정보</button>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Header>
            <TitleWrapper>
              <Title>{props.name}</Title>
              <SubTitle>{props.subTitle}</SubTitle>
            </TitleWrapper>
            <CompetitionRate>
              2023 경쟁률 <span>{props.competition}</span>
            </CompetitionRate>
          </Header>
          <MenuTitle>학과정보</MenuTitle>
          <Information>
            <InformationBox>
              <InformationBoxTitle>모집군</InformationBoxTitle>
              <InformationBoxText>가군</InformationBoxText>
            </InformationBox>
            <InformationBox>
              <InformationBoxTitle>
                모집정원
                <InfoIconWrapper color="#9395A6" marginLeft="4px" data-tooltip-id="tooltip-recruitmentQuota">
                  <Info />
                </InfoIconWrapper>
                <MyTooltip id="tooltip-recruitmentQuota" width="210px">
                  <TooltipText>수시 이월을 포함한 정시 모집 인원입니다.</TooltipText>
                </MyTooltip>
              </InformationBoxTitle>
              <InformationBoxText>33</InformationBoxText>
            </InformationBox>
            <InformationMethod>
              <Wrapper>
                <InformationMethodTitle>전형 방법</InformationMethodTitle>
                <InformationMethodTitle>
                  다단계 전형 세부사항
                  <HelpIconWrapper data-tooltip-id="tooltip-universityDetail">
                    <HelpOutline />
                  </HelpIconWrapper>
                  <MyTooltip id="tooltip-universityDetail" width="180px">
                    <TooltipText>다단계 반영 비율 나타내기</TooltipText>
                  </MyTooltip>
                </InformationMethodTitle>
              </Wrapper>
              <Wrapper>
                <Graph width="10%">
                  <GraphTitle>수능</GraphTitle>
                  <GraphScore>10%</GraphScore>
                </Graph>
                <Graph width="30%">
                  <GraphTitle>내신</GraphTitle>
                  <GraphScore>30%</GraphScore>
                </Graph>
                <Graph width="60%">
                  <GraphTitle>실기</GraphTitle>
                  <GraphScore>60%</GraphScore>
                </Graph>
              </Wrapper>
            </InformationMethod>
          </Information>

          <MenuTitle>수능 과목별 반영 비율</MenuTitle>
          <GradeTable>
            <GradeTableThead>
              <GradeTableTheadTr>
                <TableTd>국어</TableTd>
                <TableTd>수학</TableTd>
                <TableTd>영어</TableTd>
                <TableTd>탐구</TableTd>
                <TableTd>한국사</TableTd>
              </GradeTableTheadTr>
            </GradeTableThead>
            <GradeTableTbody>
              <GradeTableTBodyTr>
                <TableTd>40%</TableTd>
                <TableTd>-</TableTd>
                <TableTd>20%</TableTd>
                <TableTd>
                  40% <span>(상위1과목)</span>
                </TableTd>
                <TableTd>가산점</TableTd>
              </GradeTableTBodyTr>
            </GradeTableTbody>
          </GradeTable>

          <MenuTitle>
            <Wrapper>
              실기 반영 종목
              <UniversityScoreModalContainer />
            </Wrapper>
          </MenuTitle>
          <Wrapper>
            <TestItem>
              <TestIcon />
              <TestTitle>제자리 멀리뛰기</TestTitle>
            </TestItem>
            <TestItem>
              <TestIcon />
              <TestTitle>배근력</TestTitle>
            </TestItem>
            <TestItem>
              <TestIcon />
              <TestTitle>사이드스텝</TestTitle>
            </TestItem>
          </Wrapper>
          <Wrapper>
            <TestItem>
              <TestIcon />
              <TestTitle>메디신볼던지기</TestTitle>
            </TestItem>
            <TestItem>
              <TestIcon />
              <TestTitle>메달리기</TestTitle>
            </TestItem>
            <TestItem>
              <TestIcon />
              <TestTitle>서전트점프</TestTitle>
            </TestItem>
          </Wrapper>
          <Wrapper>
            <DateBox>
              <Calendar />
              <DateContainer>
                <DateName>실기고사 일정</DateName>
                <Date>2024년 1월 23일</Date>
              </DateContainer>
            </DateBox>
            <DateBox>
              <LoudSpeaker />
              <DateContainer>
                <DateName>최초 합격자 발표일</DateName>
                <Date>2024년 1월 23일</Date>
              </DateContainer>
            </DateBox>
          </Wrapper>
          <MenuTitle>학교 정보 바로가기</MenuTitle>
          <Wrapper>
            <InfoItem>
              <InfoIcon>
                <School />
              </InfoIcon>
              <InfoTitle>대학 홈페이지</InfoTitle>
            </InfoItem>
            <InfoItem>
              <Book />
              <InfoTitle>학과 정보</InfoTitle>
            </InfoItem>
            <InfoItem>
              <NoticeBoard />
              <InfoTitle>모집 요강</InfoTitle>
            </InfoItem>
          </Wrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default UniversityInfoModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoIconWrapper = styled.span<{ color: string; marginLeft?: string; marginRight?: string }>`
  display: inline-block;
  color: ${props => props.color};
  width: 14px;
  height: 14px;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  cursor: pointer;
`;

const TooltipText = styled.div`
  color: #000;
`;
// 학과 제목, 경쟁률
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-right: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray2};
`;

const CompetitionRate = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.colors.gray5};
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayBlack};
  border-radius: 8px;
  & span {
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
  }
`;

// 학과정보, 수능 과목별 반영비율, 실기 반영종목, 학교 정보 바로가기
const MenuTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
  margin-top: 32px;
  &:first-of-type {
    margin-top: 24px;
  }
`;

// 학과 정보
const Information = styled.div`
  display: flex;
`;

const InformationBox = styled.div`
  width: 96px;
  height: 72px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  padding: 12px;
  margin-right: 8px;
`;

const InformationBoxTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
`;

const InformationBoxText = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: ${props => props.theme.colors.grayBlack};
`;

const InformationMethod = styled.div`
  min-width: 323px;
  margin-left: 16px;
`;

const HelpIconWrapper = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  color: ${props => props.theme.colors.gray3};
  margin-left: 4px;
`;

const InformationMethodTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
`;

// 전형 방법
const Graph = styled.div<{ width }>`
  color: ${props => props.theme.colors.white};
  padding: 8px;
  width: ${props => props.width};
  height: 48px;
  border-radius: 8px 0 0 8px;
  background-color: ${props => props.theme.colors.blue};
  white-space: nowrap;
  &:nth-child(2) {
    border-radius: 0 0px 0px 0;
    background-color: ${props => props.theme.colors.purple};
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
    background-color: ${props => props.theme.colors.green};
  }
`;

const GraphTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;

const GraphScore = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
`;

//수능 과목별 반영 비율
const GradeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.gray4};
  overflow: hidden;
`;

const GradeTableThead = styled.thead`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
`;

const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.2);
  height: 32px;
  & > td {
    width: 109.4px;
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

const GradeTableTbody = styled.tbody`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;

const GradeTableTBodyTr = styled.tr`
  height: 32px;
  & > td {
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

const TableTd = styled.td`
  vertical-align: middle;
  & > span {
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
  }
`;

// 실기 반영 종목
const TestItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.gray6};
  &:last-of-type {
    margin-right: 0;
  }
`;

const TestIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const TestTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
`;

// 실기고사 일정, 최초합격자 발표일
const DateBox = styled.div`
  height: 68px;
  padding: 16px 24px;
  background-color: rgba(107, 119, 248, 0.15);
  display: flex;
  border-radius: 16px;
  width: 100%;
  margin-right: 16px;
  margin-top: 32px;
  color: ${props => props.theme.colors.blue};
  :last-of-type {
    margin-right: 0;
    background-color: rgba(96, 200, 222, 0.15);
    color: #45bfd9;
  }
`;

const DateContainer = styled.div`
  margin-left: 16px;
`;

const DateName = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayBlack};
`;
const Date = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

// 학교 정보 바로가기
const InfoItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  margin-right: 10px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const InfoIcon = styled.div`
  color: ${props => props.theme.colors.green};
  width: 20px;
  height: 20px;
`;

const InfoTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;
