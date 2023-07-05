import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { isEmpty } from 'lodash';

export interface UniversityCategoryItem {
  title?: string; // 제목
  icon?: ReactNode; // 아이콘
  text?: string; // 아이콘 옆 텍스트
}

interface UniversityCategoryListItemProps extends UniversityCategoryItem {
  isSelected: boolean;
  onClick: (item: Omit<UniversityCategoryListItemProps, 'onClick'>) => any;
}

const UniversityCategoryListItem = (props: UniversityCategoryListItemProps) => {
  const { isSelected, icon, title, text, onClick } = props;

  return (
    <ItemContainer isSelected={isSelected} onClick={() => onClick(props)}>
      <ContainerTitle isSelected={isSelected} hasTitle={!isEmpty(title)}>
        {title}
      </ContainerTitle>
      <Wrapper>
        <IconWrapper isSelected={isSelected}>{icon}</IconWrapper>
        <ContainerText isSelected={isSelected}>{text}</ContainerText>
      </Wrapper>
    </ItemContainer>
  );
};

UniversityCategoryListItem.defaultProps = {
  onClick: console.log,
};

export default UniversityCategoryListItem;

const ItemContainer = styled.div<Pick<UniversityCategoryListItemProps, 'isSelected'>>`
  padding: 16px;
  text-align: center;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  background-color: ${props => (props.isSelected ? props.theme.colors.deepGreen : props.theme.colors.gray6)};
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.grayBlack)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContainerTitle = styled.div<{ isSelected: boolean; hasTitle?: boolean }>`
  font-size: ${props => (props.hasTitle ? '14px' : '16px')};
  font-weight: ${props => (props.hasTitle ? 600 : 700)};
  line-height: 16px;
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.gray2)};
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #45bfd9;
`;

const IconWrapper = styled.div<{ isSelected: boolean }>`
  color: ${props => (props.isSelected ? props.theme.colors.white : '#45bfd9')};
  margin-right: 4px;
  width: 16px;
  height: 16px;
`;
const ContainerText = styled.div<{ isSelected: boolean }>`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.grayBlack)};
`;
