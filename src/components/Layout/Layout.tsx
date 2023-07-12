import React, { HTMLProps } from 'react';
import { Navbar } from '../Navbar';
import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderContainer';
import { useRouter } from 'next/router';
import { SERVICE_PATH } from '@/constants/path';

type LayoutProps = HTMLProps<HTMLElement>;

const Layout = (props: LayoutProps) => {
  const router = useRouter();

  return (
    <LayoutWrapper>
      <Navbar />
      <BodyWrapper>
        <HeaderContainer />
        <ChildrenWrapper isHome={router.pathname === SERVICE_PATH.HOME || router.pathname === SERVICE_PATH.MY_SCORE}>{props.children}</ChildrenWrapper>
      </BodyWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 20px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
`;

const ChildrenWrapper = styled.div<{ isHome: boolean }>`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  border-radius: 24px;
  background-color: ${props => props.theme.colors.gray5};
  padding: ${props => (props.isHome ? '30px' : '14px')};
`;
