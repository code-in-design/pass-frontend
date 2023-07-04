import React, { HTMLProps } from 'react';
import styled from '@emotion/styled';
import HeaderContainer from '../../../components/Header/HeaderContainer';
import { AdminNavbar } from '../AdminNavbar';

type LayoutProps = HTMLProps<HTMLElement>;

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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-bottom: 32px;
  padding-right: 32px;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 24px;
  background-color: #f3f4fa;
  padding: 40px;
`;
