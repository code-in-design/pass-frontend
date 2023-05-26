import NavbarItem from './NavbarItem';
import { useNavbar } from './useNavbar';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Home from '../../../public/images/icons/home.svg';
import EditSquare from '../../../public/images/icons/editSquare.svg';
import School from '../../../public/images/icons/school.svg';
import Analytics from '../../../public/images/icons/analytics.svg';
import Settings from '../../../public/images/icons/settings.svg';
import Router from 'next/router';

interface Props {
  menuList: { icon: ReactNode; title: string }[];
}

export const Navbar = (props: Props) => {
  const { rootProps } = useNavbar();
  const router = Router;

  return (
    <NavWrapper>
      <Logo src="/images/logos/logo.svg" alt="Logo" onClick={() => router.push('/')} />
      <MenuList>
        {props?.menuList?.map((item, index) => (
          <NavbarItem key={index} icon={item.icon} title={item.title} />
        ))}
      </MenuList>
      <LogOut>
        <LogOutImg src="/images/icons/logout.svg" alt="logout" />
        <LogOutText>로그아웃</LogOutText>
      </LogOut>
    </NavWrapper>
  );
};

Navbar.defaultProps = {
  menuList: [
    { icon: <Home />, title: '메인홈' },
    { icon: <EditSquare />, title: '내 점수 입력하기' },
    { icon: <School />, title: '대학찾기' },
    { icon: <Analytics />, title: '합격분석' },
    { icon: <Settings />, title: '환경설정' },
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
