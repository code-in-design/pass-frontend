import React, { HTMLProps } from 'react';
import styled from '@emotion/styled';
import Layout from '../../../components/Layout/Layout';
import SettingsNavbar from './SettingsNavbar';

interface LayoutProps extends HTMLProps<HTMLElement> {}

const SettingsLayout = (props: LayoutProps) => {
  return (
    <Layout>
      <Container>
        <SettingsNavbar />
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
      </Container>
    </Layout>
  );
};

export default SettingsLayout;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0 32px;
`;

const ChildrenWrapper = styled.div`
  min-width: 752px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 24px;
  background-color: #fff;
  padding: 24px;
`;
