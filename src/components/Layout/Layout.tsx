import React, { HTMLProps } from 'react';
import { Navbar } from '../Navbar';
import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderContainer';

type LayoutProps = HTMLProps<HTMLElement>;

const Layout = (props: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <BodyWrapper>
        <HeaderContainer />
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
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
  padding: 14px;
`;
