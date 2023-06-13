import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import Info from '../../../../../../../public/images/icons/info.svg';
import ScoreDistributionTable from './ScoreDistributionTable';

interface Props {
  name: string;
  subTitle: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScoreDistributionModal = (props: Props) => {
  const [selectSubject, setSelectSubject] = useState('');

  return (
    <ModalLayout onClose={() => props.onClose(false)}>
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
  );
};

export default ScoreDistributionModal;
ScoreDistributionModal.defaultProps = {};

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
