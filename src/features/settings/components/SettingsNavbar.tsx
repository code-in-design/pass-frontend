import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SettingsNavbarItem from './SettingsNavbarItem';
import Person from '../../../../public/images/icons/person.svg';
import NotificationActive from '../../../../public/images/icons/notificationsActive.svg';
import Membership from '../../../../public/images/icons/membership.svg';
import Withdrawal from '../../../../public/images/icons/withdrawal.svg';
import { SERVICE_PATH } from '../../../constants/path';

interface Props {
  menuList: { icon: ReactNode; title: string; path: string }[];
}

const SettingsNavbar = (props: Props) => {
  const router = useRouter();

  const handleClickItem = item => {
    router.push(item.path);
  };

  return (
    <NavbarWrapper>
      <Title>계정</Title>
      <MenuList>
        {props?.menuList?.map((item, index) => {
          return (
            <SettingsNavbarItem key={item.title} title={item.title} handleClickItem={() => handleClickItem(item)} index={index} isSelected={item.path === router.asPath}>
              {item.icon}
            </SettingsNavbarItem>
          );
        })}
      </MenuList>
    </NavbarWrapper>
  );
};

SettingsNavbar.defaultProps = {
  menuList: [
    { icon: <Person />, title: '나의 계정', path: SERVICE_PATH.SETTINGS_MYACCOUNT },
    { icon: <NotificationActive />, title: '알림', path: SERVICE_PATH.SETTINGS_ALARM },
    { icon: <Membership />, title: '멤버십 설정', path: SERVICE_PATH.SETTINGS_MEMBERSHIP },
    { icon: <Withdrawal />, title: '회원 탈퇴', path: SERVICE_PATH.SETTINGS_WITHDRAWL },
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
