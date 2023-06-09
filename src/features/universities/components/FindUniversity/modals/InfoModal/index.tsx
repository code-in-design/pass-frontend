import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import ModalLayout from '@/components/Modal/ModalLayout';

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
          <Content>
            <ContentBox>
              <ContentBoxTitle>모집군</ContentBoxTitle>
              <ContentBoxText>가군</ContentBoxText>
            </ContentBox>
            <ContentBox>
              <ContentBoxTitle>모집정원</ContentBoxTitle>
              <ContentBoxText>33</ContentBoxText>
            </ContentBox>
            <ContentMethod>
              <Wrapper>
                <ContentMethodTitle>전형 방법</ContentMethodTitle>
                <ContentMethodTitle>다단계 전형 세부사항</ContentMethodTitle>
              </Wrapper>
              <Wrapper>
                <Graph>
                  <GraphTitle>수능</GraphTitle>
                  <GraphScore>50%</GraphScore>
                </Graph>
                <Graph>
                  <GraphTitle>실기</GraphTitle>
                  <GraphScore>50%</GraphScore>
                </Graph>
              </Wrapper>
            </ContentMethod>
          </Content>

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
          <Wrapper>
            <MenuTitle>실기 반영 종목</MenuTitle>
            <ShowTable>배점표 보기</ShowTable>
          </Wrapper>
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
              <Icon />
              <div>
                <DateName>실기고사 일정</DateName>
                <Date>2024년 1월 23일</Date>
              </div>
            </DateBox>
            <DateBox>
              <Icon />
              <div>
                <DateName>최초 합격자 발표일</DateName>
                <Date>2024년 1월 23일</Date>
              </div>
            </DateBox>
          </Wrapper>
          <MenuTitle>학교 정보 바로가기</MenuTitle>
          <Wrapper>
            <InfoItem>
              <InfoIcon />
              <InfoTitle>대학 홈페이지</InfoTitle>
            </InfoItem>
            <InfoItem>
              <InfoIcon />
              <InfoTitle>학과 정보</InfoTitle>
            </InfoItem>
            <InfoItem>
              <InfoIcon />
              <InfoTitle>모집 요강</InfoTitle>
            </InfoItem>
          </Wrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default UniversityInfoModal;

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

const MenuTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;

const ShowTable = styled.div`
  height: 24px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 0 4px;
  border: 1px solid ${props => props.theme.colors.gray4};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const ContentBox = styled.div`
  width: 96px;
  height: 72px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  padding: 12px 24px;
`;

const ContentBoxTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
`;

const ContentBoxText = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: ${props => props.theme.colors.grayBlack};
`;

const ContentMethod = styled.div`
  min-width: 323px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentMethodTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
`;

const Graph = styled.div`
  color: ${props => props.theme.colors.white};
  padding: 8px;
  width: 50%;
  height: 48px;
  border-radius: 8px 0 0 8px;
  background-color: ${props => props.theme.colors.blue};
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

const DateBox = styled.div`
  height: 68px;
  padding: 16px 24px;
  background-color: rgba(107, 119, 248, 0.15);
  display: flex;
  border-radius: 16px;
  width: 100%;
  margin-right: 16px;
  margin-bottom: 32px;
  :last-of-type {
    margin-right: 0;
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
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
  color: ${props => props.theme.colors.blue};
`;

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
  &:last-of-type {
    margin-right: 0;
  }
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const InfoTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;

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
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.blue};
`;

const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.1);
  height: 51.2px;
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
    &:last-of-type {
      width: 216px;
    }
  }
`;

const GradeTableTbody = styled.tbody`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.black};
`;

const GradeTableTBodyTr = styled.tr`
  height: 51.2px;
  letter-spacing: -0.04em;
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

const TableTd = styled.td`
  vertical-align: middle;
`;
