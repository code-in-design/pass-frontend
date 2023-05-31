import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { FieldValues, UseFormRegister, UseFormReturn, UseFormSetValue } from 'react-hook-form';

interface Props {
  titleAlign?: string;
  title?: string;
  width: string;
  margintTop: string;
  marginBottom?;
  alignItems?;
  children?: ReactNode;
  wapperWidth?: string;
  inputText?: string;
  placeholder?: string;
  placeholderAlign?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  min: number;
  max: number;
}

const GradeScoreInput = (props: Props) => {
  return (
    <ScoreWrapper wapperWidth={props.wapperWidth} alignItems={props.alignItems} marginTop={props.margintTop} marginBottom={props.marginBottom}>
      {props.title && <ScoreTitle titleAlign={props.titleAlign}>{props.title}</ScoreTitle>}
      <InputChildren>
        <InputWrapper width={props.width}>
          <ScoreInput
            {...props.register(props.name, {
              required: props.name === 'naesinGrade' ? false : '점수를 입력해주세요',
              onChange: e => {
                props.setValue(props.name, e.target.value);
              },
              min: props.min,
              max: props.max,
            })}
            placeholder={props.placeholder && props.placeholder}
            placeholderAlign={props.placeholderAlign}
          />
          {props.inputText && <InputText>{props.inputText && props.inputText}</InputText>}
        </InputWrapper>
        {props.children}
      </InputChildren>
    </ScoreWrapper>
  );
};

export default GradeScoreInput;

const ScoreWrapper = styled.div<{ alignItems?; marginTop: string; marginBottom: string; wapperWidth? }>`
  width: ${props => (props.wapperWidth ? props.wapperWidth : '100%')};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`;

const ScoreTitle = styled.div<{ titleAlign?: string }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
  text-align: ${props => (props.titleAlign ? props.titleAlign : 'left')};
`;

const InputWrapper = styled.div<{ width: string }>`
  width: ${props => props.width || '100%'};
  height: 44px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  background-color: ${props => props.theme.colors.white};
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const ScoreInput = styled.input<{ placeholderAlign?: string }>`
  text-align: ${props => (props.placeholderAlign ? props.placeholderAlign : 'right')};
  outline: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  color: ${props => props.theme.colors.grayBlack};
  ::placeholder {
    color: ${props => props.theme.colors.gray3};
    text-align: ${props => (props.placeholderAlign ? props.placeholderAlign : 'right')};
  }
`;

const InputText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
  white-space: nowrap;
`;

const InputChildren = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
