import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';
import theme from '../theme';
import { Bottom } from '@/features/myScore/components/ScoreForms/index.styles';

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
  mdGray: definePartsStyle({
    control: defineStyle({
      boxSize: '14.17px',
      borderColor: '#9395A6',
      margin: '2.5px',
    }),
    label: defineStyle({
      fontSize: '16px',
      color: '#9395A6',
    }),
    icon: defineStyle({
      strokeWidth: '1.2 !important',
    }),
  }),

  greenCheckbox: definePartsStyle({
    control: defineStyle({
      width: '15px',
      height: '15px',
      borderColor: '#60C8DE',
      margin: '0',
      _checked: {
        backgroundColor: '#60C8DE',
        borderColor: '#60C8DE',
        _hover: {
          backgroundColor: '#60C8DE',
          borderColor: '#60C8DE',
        },
      },
      _hover: {
        backgroundColor: '#60C8DE',
        borderColor: '#60C8DE',
      },
    }),
    label: defineStyle({
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      color: '#353644',
      marginLeft: '6.5px',
    }),
  }),
  greenCheckboxSmall: definePartsStyle({
    control: defineStyle({
      width: '15px',
      height: '15px',
      borderColor: '#60C8DE',
      margin: '0',
      _checked: {
        backgroundColor: '#60C8DE',
        borderColor: '#60C8DE',
        _hover: {
          backgroundColor: '#60C8DE',
          borderColor: '#60C8DE',
        },
      },
      _hover: {
        backgroundColor: '#60C8DE',
        borderColor: '#60C8DE',
      },
    }),
    label: defineStyle({
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      color: '#353644',
      marginLeft: '6.5px',
    }),
  }),

  checkButton: definePartsStyle({
    container: defineStyle({
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '16px',
      border: '1px solid #e4e6f0',
      _checked: {
        border: '1px solid #6B77F8',
        backgroundColor: '#6B77F8',
      },
    }),
    control: defineStyle({
      width: '16px',
      height: '16px',
      backgroundImage: "url('/images/icons/filterPlus.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      border: 'none',
      _checked: {
        width: '16px',
        height: '16px',
        backgroundImage: "url('/images/icons/check.svg')",
      },
    }),
    icon: defineStyle({
      display: 'none',
    }),
    label: defineStyle({
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap',
      color: '#9395A6',
      _checked: {
        color: '#fff',
      },
    }),
  }),

  noControlCheckbox: definePartsStyle({
    container: defineStyle({
      display: 'flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: '16px',
      border: '1px solid #e4e6f0',
      _checked: {
        border: '1px solid #6B77F8',
        backgroundColor: '#6B77F8',
      },
    }),
    control: defineStyle({
      display: 'none',
    }),
    icon: defineStyle({
      display: 'none',
    }),
    label: defineStyle({
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      color: '#9395A6',
      marginLeft: 0,
      _checked: {
        color: '#fff',
      },
    }),
  }),

  blueCheckBox: definePartsStyle({
    control: defineStyle({
      width: '15px',
      height: '15px',
      padding: '2.5px',
      borderColor: theme.colors.gray3,
      margin: '0',
      _checked: {
        backgroundColor: theme.colors.blue,
        borderColor: theme.colors.blue,
      },
    }),
    icon: defineStyle({
      height: '8px',
    }),
    label: defineStyle({
      fontFamily: 'Pretendard Bold',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.28px',
      color: theme.colors.grayBlack,
      marginLeft: '6.5px',
    }),
  }),
};

export const checkboxStyle = defineMultiStyleConfig({ sizes });
