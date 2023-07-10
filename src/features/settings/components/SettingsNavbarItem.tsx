import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  children: ReactNode;
  handleClickItem: (item) => void;
  index: number;
  isSelected: boolean;
}

const SettingsNavbarItem = (props: Props) => {
  return (
    <MenuListItem id={props.title === '회원 탈퇴' ? 'withdrawalMenuOpen' : ''} isSelected={props.isSelected} onClick={props.handleClickItem}>
      <ImageWrapper>{props.children}</ImageWrapper>
      <span>{props.title}</span>
    </MenuListItem>
  );
};

export default SettingsNavbarItem;

const MenuListItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 16px;
  color: ${props => (props.isSelected ? props.theme.colors.grayBlack : props.theme.colors.gray1)};
  font-size: 16px;
  font-weight: ${props => (props.isSelected ? 700 : 500)};
  line-height: 24px;
  background-color: ${props => (props.isSelected ? props.theme.colors.gray6 : props.theme.colors.white)};
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    /* background-color: ${props => props.theme.colors.gray6};
    color: ${props => props.theme.colors.grayBlack};
    font-weight: 700; */
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;
