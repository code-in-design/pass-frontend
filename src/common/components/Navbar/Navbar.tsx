import { useNavbar } from './useNavbar';
import styled from '@emotion/styled';

export const Navbar = () => {
  const { rootProps } = useNavbar();

  return (
    <NavWrapper>
      <Logo src="/images/logos/logo.svg" alt="Logo" />
      <MenuList>
        <MenuListItem>
          <MenuImg src="/images/icons/home.svg" alt="home" />
          <MenuTitle>메인홈</MenuTitle>
        </MenuListItem>

        <MenuListItem>
          <MenuImg src="/images/icons/editSquare.svg" alt="editSquare" />
          <MenuTitle>내 점수 입력하기</MenuTitle>
        </MenuListItem>

        <MenuListItem>
          <MenuImg src="/images/icons/school.svg" alt="school" />
          <MenuTitle>대학찾기</MenuTitle>
        </MenuListItem>

        <MenuListItem>
          <MenuImg src="/images/icons/analytics.svg" alt="analytics" />
          <MenuTitle>합격분석</MenuTitle>
        </MenuListItem>

        <MenuListItem>
          <MenuImg src="/images/icons/settings.svg" alt="settings" />
          <MenuTitle>환경설정</MenuTitle>
        </MenuListItem>
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

const MenuImg = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 8px;
`;

const MenuTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
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
