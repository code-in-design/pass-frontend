import React, { HTMLProps } from 'react';
import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderContainer';
import { AdminNavbar } from '../AdminNavbar';

interface LayoutProps extends HTMLProps<HTMLElement> {}

const AdminLayout = (props: LayoutProps) => {
  return (
    <LayoutWrapper>
      <AdminNavbar />
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
  background-color: #f3f4fa;
  padding: 40px;
`;
