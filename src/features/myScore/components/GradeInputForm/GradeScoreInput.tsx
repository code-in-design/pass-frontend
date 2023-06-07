import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

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
  pattern?: RegExp;
}

// 컴포넌트가 역할
const GradeScoreInput = (props: Props) => {
  const [unRequiredField, setUnRequiredField] = useState<string[]>([]);
  // TODO
  const inquiry1Type = props.unRequiredFields && props.unRequiredFields[0]?.value;
  const inquiry2Type = props.unRequiredFields && props.unRequiredFields[1]?.value;
  const mathDropout = props.unRequiredFields && props.unRequiredFields[2];

  // 수포자, 탐구 미응시인경우
  useEffect(() => {
    const updatedUnRequiredField: string[] = ['naesinGrade'];

    // inquiry 질문, 탐구
    if (inquiry1Type === '미응시') {
      updatedUnRequiredField.push('inquiry1StandardScore', 'inquiry1Percentile', 'inquiry1Grade', 'inquiry1RawScore');
    }

    // inquiry 질문, 탐구
    if (inquiry2Type === '미응시') {
      updatedUnRequiredField.push('inquiry2StandardScore', 'inquiry2Percentile', 'inquiry2Grade', 'inquiry2RawScore');
    }

    // 수포자
    if (mathDropout) {
      updatedUnRequiredField.push('mathRawScore');
    }
    setUnRequiredField(updatedUnRequiredField);
  }, [inquiry1Type, inquiry2Type, mathDropout]);

  // const checkPattern = e => {
  //   const value = e.target.value;
  //   const result = value.substr(0, 4);
  //   e.target.value = result;
  //   // props.setValue(props.name, e.target.value);
  // };

  return (
    <ScoreWrapper wapperWidth={props.wapperWidth} alignItems={props.alignItems} marginTop={props.margintTop} marginBottom={props.marginBottom}>
      {props.title && <ScoreTitle titleAlign={props.titleAlign}>{props.title}</ScoreTitle>}
      <InputChildren>
        <InputWrapper width={props.width}>
          {/* <ScoreInput
            {...props.register(props.name, {
              required: !unRequiredField.includes(props.name) ? `${props.name}의 점수를 입력해주세요` : false,
              disabled: !unRequiredField.includes(props.name) ? false : true,
              // validate: {
              //   lessThanHundred: v => parseInt(v) <= 100,
              //   lessThanFifty: v => parseInt(v) <= 50,
              //   grade: v => 1 <= v && v <= 9,
              // },
              onChange: e => {
                checkPattern(e);
              },
              min: props.min,
              max: props.max,
              pattern: props.pattern,
            })}
            placeholder={props.placeholder && props.placeholder}
            placeholderAlign={props.placeholderAlign}
          /> */}
          {props.children}
          {props.inputText && <InputText>{props.inputText && props.inputText}</InputText>}
        </InputWrapper>
        {/* {props.children} */}
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
