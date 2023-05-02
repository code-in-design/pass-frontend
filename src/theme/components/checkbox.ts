import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

import { checkboxAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
const sizes = {
  lg: definePartsStyle({
    control: defineStyle({
      boxSize: '15px',
      borderColor: '#353644',
      margin: '2.5px',
    }),
    label: defineStyle({
      fontSize: '16px',
      color: '#353644',
    }),
  }),
  md: definePartsStyle({
    control: defineStyle({
      boxSize: '14.17px',
      borderColor: '#626474',
      margin: '2.5px',
    }),
    label: defineStyle({
      fontSize: '16px',
      color: '#626474',
    }),
  }),
};

export const checkboxStyle = defineMultiStyleConfig({ sizes });
