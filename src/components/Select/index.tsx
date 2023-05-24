import React, { useCallback } from 'react';
import { StyledSelectLarge, StyledSelectSmall, StyledSelectMedium } from './index.styles';
import { FieldValues, UseFormRegister, UseFormRegisterReturn, UseFormReturn, useForm } from 'react-hook-form';
import { ActionMeta } from 'react-select';

export interface SelectProps {
  size: 'sm' | 'md' | 'lg';
  options?: Array<any>;
  defaultValue?: object;
  placeholder?: string;
  name: string;
  setValue: UseFormReturn['setValue'];
  register: UseFormRegister<FieldValues>;
  required: string;
}

const Select = (props: SelectProps) => {
  const { name, setValue } = props;
  const selectProps = { options: props.options, defaultValue: props.defaultValue, placeholder: props.placeholder };

  const handleChange = useCallback(
    (newValue: any, actionMeta: ActionMeta<any>) => {
      setValue(name, newValue);
    },
    [name, setValue],
  );

  return (
    <>
      {props.size === 'sm' && <StyledSelectSmall {...selectProps} onChange={handleChange} className="react-select-small-container" classNamePrefix="react-select-small" instanceId="react-select-small" />}
      {props.size === 'md' && <StyledSelectMedium {...selectProps} onChange={handleChange} className="react-select-middle-container" classNamePrefix="react-select-middle" instanceId="react-select-middle" />}
      {props.size === 'lg' && (
        <StyledSelectLarge {...selectProps} {...props.register(name, { required: props.required })} onChange={handleChange} className="react-select-large-container" classNamePrefix="react-select-large" instanceId="react-select-large" />
      )}
    </>
  );
};

export default Select;
