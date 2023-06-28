import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  children: ReactNode;
  onClick: () => void;
}

const SettingsNavbarItem = (props: Props) => {
  return (
    <MenuListItem onClick={props.onClick}>
      <ImageWrapper>{props.children}</ImageWrapper>
      <span>{props.title}</span>
    </MenuListItem>
  );
};

export default SettingsNavbarItem;

const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 16px;
  color: ${props => props.theme.colors.gray1};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${props => props.theme.colors.gray6};
    color: ${props => props.theme.colors.grayBlack};
    font-weight: 700;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;
