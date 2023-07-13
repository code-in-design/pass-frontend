import React, { useState } from 'react';
import styled from '@emotion/styled';
import PracticalScoreDistributionChart from '@/components/Table/PracticalScoreDistributionChart';
import ModalLayout from '../ModalLayout';
import PracticalTag from '@/components/Tag/PracticalTag';
import { PracticalType } from '@/components/PracticalIcon';

interface Props {
  name: string;
  subTitle: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  practicals: PracticalType[];
  data?: {
    men: string;
    women: string;
  }[];
}

const PracticalScoreDistributionModal = (props: Props) => {
  const [selectedPractical, setSelectedPractical] = useState(props.practicals[0]);

  const handleItemClick = (item: PracticalType) => {
    setSelectedPractical(item);
  };

  return (
    <ModalLayout onClose={() => props.onClose(false)}>
      <TitleWrapper>
        <Title>{props.name}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </TitleWrapper>
      <MenuTitle>실기 반영 종목</MenuTitle>
      <Wrapper>
        {props?.practicals?.map((practicalType, index) => {
          return <PracticalTag key={index} type={practicalType} isSelected={selectedPractical === practicalType} onClick={handleItemClick} />;
        })}
      </Wrapper>
      <TableWrapper>
        <PracticalScoreDistributionChart title={selectedPractical} data={props.data} />
      </TableWrapper>
    </ModalLayout>
  );
};

export default PracticalScoreDistributionModal;

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
