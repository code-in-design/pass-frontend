import React, { useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import ScoreDistributionTable from './ScoreDistributionTable';
import ExerciseType from '../../ExerciseType';

interface Props {
  name: string;
  subTitle: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  exercise: string[];
}

const ScoreDistributionModal = (props: Props) => {
  const [toggleItem, setToggleItem] = useState(props.exercise[0]);

  const handleItemClick = item => {
    setToggleItem(item);
  };

  return (
    <ModalLayout onClose={() => props.onClose(false)}>
      <TitleWrapper>
        <Title>{props.name}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </TitleWrapper>
      <MenuTitle>실기 반영 종목</MenuTitle>
      <Wrapper>
        {props?.exercise?.map((item, index) => {
          return <ExerciseType key={index} type={item} isSelected={toggleItem === item} onClick={handleItemClick} />;
        })}
      </Wrapper>
      <TableWrapper>
        <ScoreDistributionTable title={toggleItem} />
      </TableWrapper>
    </ModalLayout>
  );
};

export default ScoreDistributionModal;
ScoreDistributionModal.defaultProps = {
  exercise: ['제자리 멀리뛰기', '배근력', '사이드스텝', '메디신볼던지기', '매달리기'],
};

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

// 배점 표
const TableWrapper = styled.div`
  width: 100%;
  height: 448px;
  overflow-y: auto;
  margin-top: 32px;
`;
