import React from 'react';
import { StyledSelectLarge, StyledSelectSmall, StyledSelectMedium } from './index.styles';

type Props = {
  size: 'sm' | 'md' | 'lg';
  options: Array<any>;
  defaultValue?: object;
  placeholder?: string;
  onChange?: (e: any) => void;
};

const Select = (props: Props) => {
  return (
    <>
      {props.size === 'sm' && (
        <StyledSelectSmall className="react-select-small-container" classNamePrefix="react-select-small" instanceId="react-select-small" options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />
      )}
      {props.size === 'md' && (
        <StyledSelectMedium
          className="react-select-middle-container"
          classNamePrefix="react-select-middle"
          instanceId="react-select-middle"
          options={props.options}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={e => console.log(e)}
        />
      )}
      {props.size === 'lg' && (
        <StyledSelectLarge className="react-select-large-container" classNamePrefix="react-select-large" instanceId="react-select-large" options={props.options} defaultValue={props.defaultValue} placeholder={props.placeholder} />
      )}
    </>
  );
};

export default Select;
