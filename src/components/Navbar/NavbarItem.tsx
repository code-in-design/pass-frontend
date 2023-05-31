import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  children: ReactNode;
  onClick: () => void;
};

const NavbarItem = (props: Props) => {
  return (
    <MenuListItem onClick={props.onClick}>
      <ImageWrapper>{props.children}</ImageWrapper>
      <MenuTitle>{props.title}</MenuTitle>
    </MenuListItem>
  );
};

export default NavbarItem;

const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 16px;
  color: #737c89;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;

const MenuTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04em;
`;
