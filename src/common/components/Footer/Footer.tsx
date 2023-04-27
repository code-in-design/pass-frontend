import { Box, BoxProps, Container } from '@chakra-ui/react';
import { Placeholder } from '../Placeholder/Placeholder';

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="blue.500" color="white" {...props}>
      <Container>
        <Placeholder minH="20">Footer</Placeholder>
      </Container>
    </Box>
  );
};
