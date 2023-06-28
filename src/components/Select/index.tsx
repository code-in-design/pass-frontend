import React, { useCallback } from 'react';
import { StyledSelectLarge, StyledSelectSmall, StyledSelectMedium, StyledSelectMini, StyledSelectMiniBorder } from './index.styles';
import { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';
import { ActionMeta } from 'react-select';

export interface SelectProps {
  size: 'mini' | 'miniBorder' | 'sm' | 'md' | 'lg';
  options?: Array<any>;
  defaultValue?: object;
  placeholder?: string;
  name: string;
  setValue: UseFormReturn['setValue'];
  register: UseFormRegister<FieldValues>;
  required?: string;
  width?: string;
  height?: string;
}

const Select = (props: SelectProps) => {
  const { name, setValue } = props;
  const selectProps = { options: props.options, defaultValue: props.defaultValue, placeholder: props.placeholder };

  const handleChange = useCallback(
    (newValue: any, actionMeta: ActionMeta<any>) => {
      setValue(name, newValue.value);
    },
    [name, setValue],
  );

  return (
    <>
      {props.size === 'mini' && <StyledSelectMini {...selectProps} onChange={handleChange} className="react-select-mini-container" classNamePrefix="react-select-mini" instanceId="react-select-mini" />}
      {props.size === 'miniBorder' && <StyledSelectMiniBorder {...selectProps} onChange={handleChange} className="react-select-miniBorder-container" classNamePrefix="react-select-miniBorder" instanceId="react-select-miniBorder" />}
      {props.size === 'sm' && <StyledSelectSmall {...selectProps} defaultValue={props.defaultValue} onChange={handleChange} className="react-select-small-container" classNamePrefix="react-select-small" instanceId="react-select-small" />}
      {props.size === 'md' && <StyledSelectMedium {...selectProps} onChange={handleChange} width={props.width} className="react-select-middle-container" classNamePrefix="react-select-middle" instanceId="react-select-middle" />}
      {props.size === 'lg' && (
        <StyledSelectLarge
          {...selectProps}
          height={props.height}
          {...props.register(name, { required: props.required })}
          onChange={handleChange}
          className="react-select-large-container"
          classNamePrefix="react-select-large"
          instanceId="react-select-large"
        />
      )}
    </>
  );
};

export default Select;
