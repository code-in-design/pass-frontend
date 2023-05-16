import React from 'react';
import styled from '@emotion/styled';

type Props = {
  img: string;
  title: string;
};

const NavbarItem = (props: Props) => {
  return (
    <MenuListItem>
      <ImageWrapper>
        <MenuImg src={props.img} alt={props.img} />
      </ImageWrapper>

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
    background-color: #6b77f8;
    color: #fff;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;

const MenuImg = styled.img`
  & > path {
    fill: #737c89;
    & :hover {
      fill: white;
    }
  }
`;

const MenuTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
