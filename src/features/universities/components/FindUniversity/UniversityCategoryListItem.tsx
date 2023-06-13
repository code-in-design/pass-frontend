import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  lists: { total?: string; title?: string; icon?: ReactNode; text: string };
  isSelected: boolean;
  onClick: (item: string) => void;
}

const UniversityCategoryListItem = (props: Props) => {
  const Component = props.isSelected ? ItemSelectContainer : ItemContainer;

  return (
    <Component onClick={() => props.onClick(props.lists.text)}>
      {props.lists.total ? <ContainerTotalTitle>{props.lists.total}</ContainerTotalTitle> : <ContainerTitle isSelected={props.isSelected}>{props.lists.title}</ContainerTitle>}
      {!props.lists.total && (
        <Wrapper>
          <IconWrapper isSelected={props.isSelected}>{props.lists.icon}</IconWrapper>
          <ContainerText isSelected={props.isSelected}>{props.lists.text}</ContainerText>
        </Wrapper>
      )}
    </Component>
  );
};

export default UniversityCategoryListItem;

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
  color: ${props => props.theme.colors.grayBlack};
`;
const ItemSelectContainer = styled.div`
  padding: 16px;
  text-align: center;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.deepGreen};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ContainerTitle = styled.div<{ isSelected: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.gray2)};
  margin-bottom: 12px;
`;

const ContainerTotalTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
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
