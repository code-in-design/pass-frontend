import React, { useCallback } from 'react';
import { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';
import { ActionMeta } from 'react-select';
import { StyledSelect } from './index.styles';

export interface SelectProps {
  options?: Array<any>;
  defaultValue?: object;
  placeholder?: string;
  name: string;
  setValue: UseFormReturn['setValue'];
  register: UseFormRegister<FieldValues>;
  required?: string;
  height: 56 | 48 | 44 | 40 | 32 | 28 | 24;
  isNoBorder?: boolean;
  border: string;
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

  const heightToMenuPadding = {
    56: '18px 24px',
    48: '14px 24px',
    44: '14px 24px',
    40: '12px 16px',
    32: '8px 12px',
    28: '6px 12px',
    24: '4px 12px',
  };

  const heightToPadding = {
    56: '24px',
    48: '24px',
    44: '24px',
    40: '16px',
    32: '12px',
    28: '12px',
    24: '12px',
  };

  const heightToFont = {
    56: '16px',
    48: '16px',
    44: '14px',
    40: '12px',
    32: '14px',
    28: '12px',
    24: '12px',
  };

  const heightToArrowSize = {
    56: '24px',
    48: '24px',
    44: '24px',
    40: '16px',
    32: '16px',
    28: '20px',
    24: '16px',
  };

  const menuPadding = heightToMenuPadding[props.height];
  const padding = heightToPadding[props.height];
  const font = heightToFont[props.height];
  const arrowSize = heightToArrowSize[props.height];

  return (
    <>
      <StyledSelect
        {...selectProps}
        height={props.height}
        padding={padding}
        menuPadding={menuPadding}
        font={font}
        isNoBorder={props.isNoBorder || false}
        border={props.border}
        arrowSize={arrowSize}
        {...props.register(name, { required: props.required })}
        onChange={handleChange}
        className="react-select-container"
        classNamePrefix="react-select"
        instanceId="react-select"
      />
    </>
  );
};

export default Select;
