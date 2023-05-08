import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  // border: '1px solid #', // change the appearance of the border
  borderRadius: 16, // remove the border radius
  // fontWeight: 'semibold', // change the font weight
  color: '#fff',
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
});
