import React, { ReactNode, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ArrowDropUp from '../../../public/images/icons/arrow_drop_up.svg';
import Ellipse from '../../../public/images/icons/ellipse.svg';
import { Flex } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { useRouter } from 'next/router';

export type SubMenu = {
  title: string;
  route: string;
};

export type Props = {
  title: string;
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  subMenu?: SubMenu[];
};

const NavbarItem = (props: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const router = useRouter();

  const handleMouseEnter = useCallback(() => {
    setIsMouseOver(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseOver(false);
  }, []);

  return (
    <MenuListItemWrapper isActive={props?.isActive} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <MenuListItem onClick={props.onClick} isActive={props?.isActive} isMouseOver={isMouseOver}>
        <Flex>
          <ImageWrapper>{props.children}</ImageWrapper>
          <MenuTitle>{props.title}</MenuTitle>
        </Flex>
        {props.subMenu && <ArrowDropUp width="24px" height="24px" />}
      </MenuListItem>
      {(isMouseOver || props.isActive) && props.subMenu && (
        <SubMenu>
          <SubMenuItemWrapper>
            {props?.subMenu.map((menu, index) => {
              return (
                <SubMenuItem key={index} onClick={() => router.push(menu.route)} isSelected={router.pathname.includes(menu.route)}>
                  <Ellipse width="4px" height="4px" />
                  {menu.title}
                </SubMenuItem>
              );
            })}
          </SubMenuItemWrapper>
        </SubMenu>
      )}
    </MenuListItemWrapper>
  );
};

export default NavbarItem;

const MenuListItemWrapper = styled.div<any>``;

const MenuListItem = styled.li<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
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
    & > svg {
      transform: rotate(180deg);
    }
  }

  ${props =>
    (props.isActive || props.isMouseOver) &&
    `
    background-color: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
    & > svg {
      transform: rotate(180deg);
    }
  `}
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

const SubMenu = styled.li`
  padding: 10px 16px;
  color: ${theme.colors.gray3};
`;

const SubMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubMenuItem = styled.div<any>`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${({ isSelected }) => (isSelected ? theme.colors.blue : theme.colors.gray3)};
  font-family: ${({ isSelected }) => (isSelected ? 'Pretendard SemiBold' : 'Pretendard Regular')};

  &:hover {
    color: ${theme.colors.blue};
    font-family: 'Pretendard SemiBold';
  }
`;
