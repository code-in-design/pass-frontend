import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Ellipse from '../../../public/images/icons/ellipse.svg';
import ArrowDropDown from '../../../public/images/icons/arrow_drop_down.svg';
import theme from '@/theme/theme';
import { useRouter } from 'next/router';
import { startsWith } from 'lodash';

export type SubMenu = {
  title: string;
  route: string;
};

type Props = {
  title: string;
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  subMenu?: SubMenu[];
};

const NavbarItem = (props: Props) => {
  const router = useRouter();

  return (
    <MenuListItemContainer>
      <MenuListItem onClick={props.onClick} isActive={props?.isActive}>
        <TitleWrapper>
          <ImageWrapper>{props.children}</ImageWrapper>
          <MenuTitle>{props.title}</MenuTitle>
        </TitleWrapper>
        <ArrowDropDownWrapper isActive={props?.isActive}>
          <ArrowDropDown width="24px" height="24px" />
        </ArrowDropDownWrapper>
      </MenuListItem>
      {props.subMenu && props.isActive && (
        <SubMenuList>
          {props.subMenu.map((menu, index) => {
            return (
              <SubMenuListItem key={index} onClick={() => router.push(menu.route)} isSelected={startsWith(router.pathname, menu.route)}>
                <Ellipse width="4px" height="4px" />
                <div>{menu.title}</div>
              </SubMenuListItem>
            );
          })}
        </SubMenuList>
      )}
    </MenuListItemContainer>
  );
};

export default NavbarItem;

const MenuListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;

const SubMenuList = styled.div`
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  color: ${theme.colors.gray3};
  font-family: Pretendard Regular;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

const SubMenuListItem = styled.li<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  color: ${({ isSelected }) => (isSelected ? theme.colors.blue : theme.colors.gray3)};
  font-family: ${({ isSelected }) => (isSelected ? 'Pretendard SemiBold' : 'Pretendard Regular')};
`;

const MenuListItem = styled.li<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-radius: 16px;
  padding: 16px;
  color: #737c89;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }

  ${props =>
    props.isActive &&
    `
    background-color: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
  `}
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const MenuTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04em;
`;

const ArrowDropDownWrapper = styled.div<any>`
  ${({ isActive }) =>
    isActive &&
    `
    transform: rotate(180deg);
  `};
`;
