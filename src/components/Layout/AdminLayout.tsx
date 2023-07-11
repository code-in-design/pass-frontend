import React, { HTMLProps } from 'react';
import { Navbar } from '../Navbar';
import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderContainer';
import Home from '../../../public/images/icons/home.svg';
import Analytics from '../../../public/images/icons/analytics.svg';
import Management from '../../../public/images/icons/manageAccounts.svg';
import EditNote from '../../../public/images/icons/editNote.svg';
import { ADMIN_PATH } from '../../constants/path';
import { useRouter } from 'next/router';

type LayoutProps = HTMLProps<HTMLElement>;

const AdminLayout = (props: LayoutProps) => {
  const router = useRouter();

  return (
    <LayoutWrapper>
      <Navbar
        menuList={[
          { icon: <Home />, title: '대시보드', route: ADMIN_PATH.HOME },
          { icon: <Analytics />, title: '사전예약', route: ADMIN_PATH.RESERVATION },
          { icon: <Management />, title: '사용자 관리', route: ADMIN_PATH.USERLIST },
          { icon: <EditNote />, title: '수능 점수표', route: ADMIN_PATH.SCORESHEET },
        ]}
      />
      <BodyWrapper>
        <HeaderContainer />
        <ChildrenWrapper isHome={router.pathname === ADMIN_PATH.HOME}>{props.children}</ChildrenWrapper>
      </BodyWrapper>
    </LayoutWrapper>
  );
};

export default AdminLayout;

const LayoutWrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 32px;
  padding-right: 32px;
`;

const ChildrenWrapper = styled.div<{ isHome: boolean }>`
  width: 100%;
  height: calc(100vh - 144px);
  overflow-y: auto;
  /* height: 880px; */
  border-radius: 24px;
  background-color: ${props => props.theme.colors.gray5};
  padding: ${props => (props.isHome ? '30px' : '14px')};
`;
