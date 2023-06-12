import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import Info from '../../../../../../../public/images/icons/info.svg';
import ScoreDistributionTable from './ScoreDistributionTable';

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

  const [selectSubject, setSelectSubject] = useState('');

  return (
    <>
      <ShowTable onClick={openModal}>
        <InfoIconWrapper color="#626474" marginRight="4px" data-tooltip-id="tooltip-gradingTable">
          <Info />
        </InfoIconWrapper>
        배점표 보기
      </ShowTable>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <TitleWrapper>
            <Title>{props.name}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
          </TitleWrapper>
          <MenuTitle>실기 반영 비율</MenuTitle>
          <Wrapper>
            {/* 컴포넌트로 분리하기 */}
            <TestItem onClick={() => setSelectSubject('제자리 멀리 뛰기')}>
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
          <TableWrapper>
            <ScoreDistributionTable title={selectSubject} />
          </TableWrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default ScoreDistributionModal;
ScoreDistributionModal.defaultProps = {};

const InfoIconWrapper = styled.span<{ color: string; marginLeft?: string; marginRight?: string }>`
  display: inline-block;
  color: ${props => props.color};
  width: 14px;
  height: 14px;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 12px;
  min-width: 547px;
`;

const MenuTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
  margin-top: 24px;
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
  cursor: pointer;
`;

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
  cursor: pointer;
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

// 배점 표
const TableWrapper = styled.div`
  width: 100%;
  height: 448px;
  overflow-y: auto;
  margin-top: 32px;
`;
