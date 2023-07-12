import styled from '@emotion/styled';
import React, { useState } from 'react';
import ModalLayout from '@/components/Modal/ModalLayout';
import Info from '../../../../../../../public/images/icons/info.svg';
import HelpOutline from '../../../../../../../public/images/icons/helpOutline.svg';
import LoudSpeaker from '../../../../../../../public/images/icons/Loudspeaker.svg';
import Calendar from '../../../../../../../public/images/icons/calendar.svg';
import School from '../../../../../../../public/images/icons/graduation.svg';
import Book from '../../../../../../../public/images/icons/book.svg';
import NoticeBoard from '../../../../../../../public/images/icons/noticeBoard.svg';
import MyTooltip from '@/components/Tooltip';
import ExerciseType from '../../ExerciseType';
import DistributionTableContainer from '@/components/Table/ScoreDistributionTableContainer';

interface Props {
  data: any; // TODO: any 제거
  exercise: string[]; // TODO: 어떤? 데이터가 들어오는거지?
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInformationModal = (props: Props) => {
  // TODO: 명사로 네이밍 수정
  const [openModal, setOpenModal] = useState(false);
  const department = props?.data?.universityDepartments;

  // TODO: 코드 라인수 줄이기, 파일 분리
  return (
    <>
      <ModalLayout onClose={() => props.onClose(false)}>
        <Header>
          <TitleWrapper>
            <Title>{props?.data?.universityName}</Title>
            <SubTitle>{department?.applyTypeDetail}</SubTitle>
          </TitleWrapper>
          <CompetitionRate>
            2023 경쟁률 <span>{department?.lastYearCompetitionRate}</span>
          </CompetitionRate>
        </Header>
        <InformationWrapper>
          <InformationWrapperItem>
            <MenuTitle>학과정보</MenuTitle>
            <Information>
              <InformationBox>
                <InformationBoxTitle>모집군</InformationBoxTitle>
                <InformationBoxText>{department?.recruitmentGroup}</InformationBoxText>
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
                <InformationBoxText>{department?.recruitNumber}</InformationBoxText>
              </InformationBox>
            </Information>
          </InformationWrapperItem>
          <InformationWrapperItem>
            <Wrapper>
              <MenuTitle>전형 방법</MenuTitle>
              {department?.isMultistage && (
                <InformationMethodTitle>
                  다단계 전형 세부사항
                  <HelpIconWrapper data-tooltip-id="tooltip-universityDetail">
                    <HelpOutline />
                  </HelpIconWrapper>
                  <MyTooltip id="tooltip-universityDetail" width="180px">
                    <TooltipText>{department?.multistageDetail}</TooltipText>
                  </MyTooltip>
                </InformationMethodTitle>
              )}
            </Wrapper>
            <InformationMethod>
              <GraphWrapper>
                <GraphTitle>수능</GraphTitle>
                <Graph>
                  <GraphScore width={`${department?.testRate}%`} bgColor={'#6B77F8'}>
                    {department?.testRate}%
                  </GraphScore>
                </Graph>
              </GraphWrapper>
              <GraphWrapper>
                <GraphTitle>내신</GraphTitle>
                <Graph>
                  <GraphScore width={`${department?.naesinRate}%`} bgColor={'#AA83FF'}>
                    {department?.naesinRate}%
                  </GraphScore>
                </Graph>
              </GraphWrapper>
              <GraphWrapper>
                <GraphTitle>실기</GraphTitle>
                <Graph>
                  <GraphScore width={`${department?.practicalRate}%`} bgColor={'#60C8DE'}>
                    {department?.practicalRate}%
                  </GraphScore>
                </Graph>
              </GraphWrapper>
              <GraphWrapper>
                <GraphTitle>기타</GraphTitle>
                <Graph>
                  <GraphScore width={`${department?.etcRate}%`} bgColor={'#9395a6'}>
                    {department?.etcRate}%
                  </GraphScore>
                </Graph>
              </GraphWrapper>
            </InformationMethod>
          </InformationWrapperItem>
        </InformationWrapper>

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
              {department?.subjects?.map((subject, index) => {
                const { subjectRate, subjectName } = subject;
                const 과목반영여부 = !!subjectRate;
                const 탐구과목반영개수 = department?.inquiryNumber;
                const 탐구1과목반영 = subjectName === '탐구' && 탐구과목반영개수 === 1;

                if (과목반영여부 && !탐구1과목반영) {
                  return <TableTd key={index}>{`${subjectRate}%`}</TableTd>;
                }

                if (과목반영여부 && 탐구1과목반영) {
                  return (
                    <TableTd key={index}>
                      {`${subjectRate}%`}
                      <span>(상위1과목)</span>
                    </TableTd>
                  );
                }

                return <TableTd key={index}>-</TableTd>;
              })}
            </GradeTableTBodyTr>
          </GradeTableTbody>
        </GradeTable>
        <MenuTitle>
          <Wrapper>
            실기 반영 종목
            <ShowTable onClick={() => setOpenModal(true)}>
              <Info />
              배점표 보기
            </ShowTable>
          </Wrapper>
        </MenuTitle>
        <ExerciseWrapper>
          {department?.practicalApplyType?.map((item, index) => {
            // TODO: item에 마우스 hover시 union 타입 쭉 나오게 하기
            return <ExerciseType key={index} type={item} />;
          })}
        </ExerciseWrapper>
        <Wrapper>
          <DateBox>
            <Calendar />
            <DateContainer>
              <DateName>실기고사 일정</DateName>
              <Date>{department?.practicalTestDate}</Date>
            </DateContainer>
          </DateBox>
          <DateBox>
            <LoudSpeaker />
            <DateContainer>
              <DateName>최초 합격자 발표일</DateName>
              <Date>{department?.successfulApplicantDate}</Date>
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
      {/** TODO: 모달안에 Container가 들어가있음 -> 구조 변경 */}
      {openModal && <DistributionTableContainer onClose={setOpenModal} name={props?.data?.universityName} subTitle={department?.applyTypeDetail} exercise={department?.practicalApplyType} />}
    </>
  );
};

export default UniversityInformationModal;
UniversityInformationModal.defaultProps = {
  exercise: ['제자리 멀리뛰기', '배근력', '사이드스텝', '메디신볼던지기', '매달리기'],
};

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
const InformationWrapper = styled.div`
  display: flex;
  gap: 0 24px;
`;

const InformationWrapperItem = styled.div``;

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
`;

const InformationMethodTitle = styled.div`
  margin: 24px 0 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;

// 전형 방법
const GraphWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  margin-bottom: 2px;
  :last-of-type {
    margin-bottom: 0px;
  }
`;

const Graph = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray5};
  overflow: hidden;
`;

const GraphTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  white-space: nowrap;
`;

const GraphScore = styled.div<{ width: string; bgColor: string }>`
  display: ${props => (props.width === '0%' ? 'none' : 'bolck')};
  width: ${props => props.width};
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  padding: 0 4px;
  text-align: right;
  background-color: ${props => props.bgColor};
`;

const HelpIconWrapper = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  color: ${props => props.theme.colors.gray3};
  margin-left: 4px;
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

// 배점표 보기
const ShowTable = styled.div`
  height: 24px;
  padding: 4px 8px;
  display: flex;
  border-radius: 8px;
  gap: 0 4px;
  border: 1px solid ${props => props.theme.colors.gray4};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  cursor: pointer;
`;

// 실기 반영 종목
const ExerciseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 12px;
`;
