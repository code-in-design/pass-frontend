import NavbarItem from './NavbarItem';
import { useNavbar } from './useNavbar';
import styled from '@emotion/styled';

const menuList = [
  { img: 'home', title: '메인홈' },
  { img: 'editSquare', title: '내 점수 입력하기' },
  { img: 'school', title: '대학찾기' },
  { img: 'analytics', title: '합격분석' },
  { img: 'settings', title: '환경설정' },
];

export const Navbar = () => {
  const { rootProps } = useNavbar();

  return (
    <NavWrapper>
      <Logo src="/images/logos/logo.svg" alt="Logo" />
      <MenuList>
        {menuList.map(item => (
          <NavbarItem key={`nav-${item.img}`} img={item.img} title={item.title} />
        ))}
      </MenuList>
      <LogOut>
        <LogOutImg src="/images/icons/logout.svg" alt="logout" />
        <LogOutText>로그아웃</LogOutText>
      </LogOut>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 288px;
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
