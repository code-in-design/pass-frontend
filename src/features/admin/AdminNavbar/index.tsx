import NavbarItem from './NavbarItem';
import { useNavbar } from './useNavbar';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Home from '../../../public/images/icons/home.svg';
import Analytics from '../../../public/images/icons/analytics.svg';
import { useRouter } from 'next/router';

interface Props {
  menuList: { icon: ReactNode; title: string; route: string }[];
}

export const AdminNavbar = (props: Props) => {
  const { rootProps } = useNavbar();
  const router = useRouter();

  return (
    <NavWrapper>
      <Logo src="/images/logos/logo.svg" alt="Logo" onClick={() => router.push('/')} />
      <MenuList>
        {props?.menuList?.map((item, index) => (
          <NavbarItem key={index} title={item.title} onClick={() => router.push(item.route)}>
            {item.icon}
          </NavbarItem>
        ))}
      </MenuList>
      <LogOut>
        <LogOutImg src="/images/icons/logout.svg" alt="logout" />
        <LogOutText>로그아웃</LogOutText>
      </LogOut>
    </NavWrapper>
  );
};

AdminNavbar.defaultProps = {
  menuList: [
    { icon: <Home />, title: '대시보드', route: '/admin' },
    { icon: <Analytics />, title: '사전예약', route: '/admin/reservations' },
  ],
};

const NavWrapper = styled.nav`
  width: 288px;
  min-width: 288px;
  height: 100vh;
  padding: 34px 32px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  display: block;
  width: 110px;
  height: 44px;
  margin-bottom: 34px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  width: 100%;
`;

const LogOut = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  padding: 24px 16px;
  border-top: 1px solid #e7eaef;
  margin-top: auto;
  &:hover {
    cursor: pointer;
  }
`;

const LogOutImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LogOutText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #353644;
`;
