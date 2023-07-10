import React, { HTMLProps } from 'react';
import { Navbar } from '../Navbar';
import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderContainer';
import Home from '../../../public/images/icons/home.svg';
import Analytics from '../../../public/images/icons/analytics.svg';
import { ADMIN_PATH } from '../../constants/path';

type LayoutProps = HTMLProps<HTMLElement>;

const AdminLayout = (props: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Navbar
        menuList={[
          { icon: <Home />, title: '대시보드', route: ADMIN_PATH.HOME },
          { icon: <Analytics />, title: '사전예약', route: ADMIN_PATH.RESERVATION },
        ]}
      />
      <BodyWrapper>
        <HeaderContainer />
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
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

const ChildrenWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 144px);
  overflow-y: auto;
  /* height: 880px; */
  border-radius: 24px;
  background-color: ${props => props.theme.colors.gray5};
  padding: 40px;
`;
