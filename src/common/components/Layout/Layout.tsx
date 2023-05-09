import React, { HTMLProps } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Header from '../Header/Header';
import styled from '@emotion/styled';

interface LayoutProps extends HTMLProps<HTMLElement> {}

const Layout = (props: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <BodyWrapper>
        <Header />
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
  padding-bottom: 32px;
  padding-right: 32px;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 880px;
  border-radius: 24px;
  background-color: #f3f4fa;
  padding: 40px;
`;
