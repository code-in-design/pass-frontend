import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import School from '../../../../../public/images/icons/schoolOutline.svg';
import Location from '../../../../../public/images/icons/location.svg';
import Stickynote from '../../../../../public/images/icons/stickynote.svg';

interface ItemProps {
  total?: string;
  title?: string;
  icon?: ReactNode;
  text?: string;
}

interface Props {
  lists: [{ total?: string; title?: string; icon?: ReactNode; text?: string }];
}

const UniversityCategoryItem = (props: ItemProps) => {
  return (
    <ItemContainer>
      {props.total ? <ContainerTotalTitle>{props.total}</ContainerTotalTitle> : <ContainerTitle>{props.title}</ContainerTitle>}
      {!props.total && (
        <Wrapper>
          <IconWrapper>{props.icon}</IconWrapper>
          <ContainerText>{props.text}</ContainerText>
        </Wrapper>
      )}
    </ItemContainer>
  );
};

const UniversityCategory = (props: Props) => {
  return (
    <Container>
      {props.lists.map(list => (
        <UniversityCategoryItem title={list.title} icon={list.icon} text={list.text} total={list.total} />
      ))}
    </Container>
  );
};

export default UniversityCategory;
UniversityCategory.defaultProps = {
  lists: [
    { total: '전체보기' },
    { title: '모집군', icon: <Stickynote />, text: '가군' },
    { title: '모집군', icon: <Stickynote />, text: '나군' },
    { title: '모집군', icon: <Stickynote />, text: '다군' },
    { title: '지역', icon: <Location />, text: '서울권' },
    { title: '지역', icon: <Location />, text: '수도권' },
    { title: '인기계열', icon: <School />, text: '체육교육과' },
  ],
};

const Container = styled.div`
  display: flex;
  gap: 0 7px;
  width: 100%;
  margin-bottom: 32px;
  padding-right: 16px;
`;

const ItemContainer = styled.div`
  padding: 16px;
  text-align: center;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContainerTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 12px;
`;

const ContainerTotalTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.grayBlack};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #45bfd9;
`;

const IconWrapper = styled.div`
  color: #45bfd9;
  margin-right: 4px;
  width: 16px;
  height: 16px;
`;
const ContainerText = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;
