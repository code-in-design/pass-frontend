import React from 'react';
import { StyledSelect, StyledSelectSmall, StyledSelectMiddle } from './Select.styles';

type Props = {
  size: 'sm' | 'md' | 'lg';
  className: string;
  classNamePrefix: string;
  options: Array<any>;
  defaultValue?: object;
  placeholder?: string;
};

const Select = (props: Props) => {
  return (
    <>
      {props.size === 'sm' && <StyledSelectSmall className={props.className} classNamePrefix={props.classNamePrefix} options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
      {props.size === 'md' && <StyledSelectMiddle className={props.className} classNamePrefix={props.classNamePrefix} options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
      {props.size === 'lg' && <StyledSelect className={props.className} classNamePrefix={props.classNamePrefix} options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />}
    </>
  );
};

export default Select;
