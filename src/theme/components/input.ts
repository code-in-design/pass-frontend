import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    borderRadius: 16,
    border: '1px solid #e4e6f0',
    errorBorderColor: '#FE7575',
    focusBorderColor: '#9395A6',
    _disabled: {
      cursor: 'not-allowed',
      color: '#B7B9C9',
      border: '1px solid #B7B9C9',
      backgroundColor: '#E4E6F0',
    },
  },
});

const base = definePartsStyle({
  field: {
    border: '1px solid #e4e6f0',
    backgroundColor: '#fff',
    color: '#353644',
    borderRadius: 16,
    _disabled: {
      oopacity: 1,
      cursor: 'not-allowed',
      color: '#9395A6',
      border: 'none',
      backgroundColor: '#F3F4FA',
      borderRadius: 16,
    },
    _placeholder: {
      opacity: 1,
      color: '#9395A6',
    },
  },
});

// export const inputStyle = defineMultiStyleConfig({ baseStyle });
export const inputStyle = defineMultiStyleConfig({
  variants: { base },
});
