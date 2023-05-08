import { Box, Flex } from '@chakra-ui/react';
import React, { HTMLProps } from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import Header from '../Header/Header';

interface LayoutProps extends HTMLProps<HTMLElement> {}

const Layout = (props: LayoutProps) => {
  return (
    <Flex>
      <Navbar />
      <>
        <Header />
        {props.children}
      </>
    </Flex>
  );
};

export default Layout;
