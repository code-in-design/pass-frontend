import NavbarItem from './NavbarItem';
import { useNavbar } from './useNavbar';
import styled from '@emotion/styled';

interface Props {
  menuList: { img: string; title: string }[];
}

export const Navbar = (props: Props) => {
  const { rootProps } = useNavbar();

  return (
    <NavWrapper>
      <Logo src="/images/logos/logo.svg" alt="Logo" />
      <MenuList>
        {props.menuList.map(item => (
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

Navbar.defaultProps = {
  menuList: [
    { img: '/images/icons/home.svg', title: '메인홈' },
    { img: '/images/icons/editSquare.svg', title: '내 점수 입력하기' },
    { img: '/images/icons/school.svg', title: '대학찾기' },
    { img: '/images/icons/analytics.svg', title: '합격분석' },
    { img: '/images/icons/settings.svg', title: '환경설정' },
  ],
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
