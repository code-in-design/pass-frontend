import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';

interface Props {
  name: string;
  subTitle: string;
}

const ScoreDistributionModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  return (
    <>
      <button onClick={openModal}>실기 배점표 보기</button>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <TitleWrapper>
            <Title>{props.name}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
          </TitleWrapper>
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

          <GradeTable>
            <GradeTableThead>
              <GradeTableTheadTr>
                <TableTd>종목</TableTd>
                <TableTd colSpan={2}>제자리멀리뛰기</TableTd>
              </GradeTableTheadTr>
              <GradeTableTheadTr>
                <TableTd>배점</TableTd>
                <TableTd>남</TableTd>
                <TableTd>여</TableTd>
              </GradeTableTheadTr>
            </GradeTableThead>
            <GradeTableTbody>
              <GradeTableTBodyTr>
                <TableTd>100</TableTd>
                <TableTd>300이상</TableTd>
                <TableTd>250이상</TableTd>
              </GradeTableTBodyTr>
            </GradeTableTbody>
          </GradeTable>
        </ModalLayout>
      )}
    </>
  );
};

export default ScoreDistributionModal;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-bottom: 24px;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 547px;
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
  width: 16px;
  height: 16px;
`;

const TestTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
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
