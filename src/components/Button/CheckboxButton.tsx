import { Checkbox } from '@chakra-ui/react';
import React from 'react';

interface Props {
  text: string;
}

const CheckboxButton = (props: Props) => {
  return <Checkbox size="checkButton">{props.text}</Checkbox>;
};

export default CheckboxButton;
