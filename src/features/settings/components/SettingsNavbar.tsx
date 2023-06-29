import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SettingsNavbarItem from './SettingsNavbarItem';
import Person from '../../../../public/images/icons/person.svg';
import NotificationActive from '../../../../public/images/icons/notificationsActive.svg';
import Membership from '../../../../public/images/icons/membership.svg';
import Withdrawal from '../../../../public/images/icons/withdrawal.svg';

interface Props {
  menuList: { icon: ReactNode; title: string }[];
}

const SettingsNavbar = (props: Props) => {
  const router = useRouter();

  const handleClickItem = item => {
    router.push({
      pathname: '/settings',
      query: { menu: item },
    });
  };

  return (
    <NavbarWrapper>
      <Title>계정</Title>
      <MenuList>
        {props?.menuList?.map((item, index) => (
          <SettingsNavbarItem key={item.title} title={item.title} handleClickItem={handleClickItem} index={index} isSelected={String(index) === router.query.settingMenu}>
            {item.icon}
          </SettingsNavbarItem>
        ))}
      </MenuList>
    </NavbarWrapper>
  );
};

SettingsNavbar.defaultProps = {
  menuList: [
    { icon: <Person />, title: '나의 계정' },
    { icon: <NotificationActive />, title: '알림' },
    { icon: <Membership />, title: '멤버십 설정' },
    { icon: <Withdrawal />, title: '회원 탈퇴' },
  ],
};

export default SettingsNavbar;

const NavbarWrapper = styled.div`
  min-width: 256px;
  height: auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.gray3};
  margin-bottom: 24px;
`;

const MenuList = styled.ul`
  width: 100%;
`;
