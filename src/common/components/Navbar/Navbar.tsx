import { Box, Container } from '@chakra-ui/react';
import { Placeholder } from '../Placeholder/Placeholder';
import { useNavbar } from './useNavbar';

export const Navbar = () => {
  const { rootProps } = useNavbar();

  return (
    <Box as="nav" role="navigation" position="sticky" top="0" zIndex="docked" bg="blue.500" color="white" {...rootProps}>
      <Container>
        <Placeholder minH="20">Navigation</Placeholder>
      </Container>
    </Box>
  );
};
