import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const outline = definePartsStyle({
  container: defineStyle({
    height: '52px',
    borderRadius: '16px',
    border: '1px solid #E4E6F0',
    paddingLeft: '24px',
    _checked: {
      border: '1px solid #6B77F8',
    },
  }),
  control: defineStyle({
    marginRight: '8px',
  }),
  label: defineStyle({
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#626474',
    _checked: {
      color: '#353644',
    },
  }),
});

export const radioTheme = defineMultiStyleConfig({
  variants: { outline },
});
