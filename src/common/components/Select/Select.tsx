import React from 'react';
import { StyledSelect, StyledSelectSmall, StyledSelectMiddle } from './Select.styles';

type Props = {
  size: 'sm' | 'md' | 'lg';
  options: Array<any>;
  defaultValue?: object;
  placeholder?: string;
};

const Select = (props: Props) => {
  return (
    <>
      {props.size === 'sm' && <StyledSelectSmall className="react-select-small-container" classNamePrefix="react-select-small" options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
      {props.size === 'md' && <StyledSelectMiddle className="react-select-middle-container" classNamePrefix="react-select-middle" options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
      {props.size === 'lg' && <StyledSelect className="react-select-container" classNamePrefix="react-select" options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
    </>
  );
};

export default Select;
