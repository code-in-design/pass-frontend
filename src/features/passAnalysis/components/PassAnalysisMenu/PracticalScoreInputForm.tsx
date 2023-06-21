import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  type: string;
  index?: number;
  practicalScore?: string[];
  lastType: number;
  goPrevStep: () => void;
  goNextStep: () => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const PracticalScoreInputForm = (props: Props) => {
  const exerciseIcon = exerciseType[props.type] || { text: '-', icon: '' };
  const [value, setValue] = React.useState('');

  return (
    <Container>
      <FormContainer>
        <Title>실기 기록 입력</Title>
        <Information>
          <InfoIconWrapper>
            <ExclamationMark />
          </InfoIconWrapper>
          기록 변경 횟수가 제한되어 있으니 신중히 입력하세요!
        </Information>
        <PracticalName>
          <ExerciseIconWrapper>{exerciseIcon.icon}</ExerciseIconWrapper>
          {exerciseIcon.text}
        </PracticalName>
        {props?.practicalScore ? (
          // 객관식 입력
          <Content>
            <RadioGroup defaultValue={props.getValues(exerciseIcon.text)}>
              <Stack direction="column">
                {props?.practicalScore.map((item, index) => {
                  console.log();
                  return (
                    <Radio
                      {...props.register(exerciseIcon.text, {
                        required: '점수를 선택해주세요',
                        onChange: e => {
                          props.setValue(exerciseIcon.text, e.target.value);
                        },
                      })}
                      key={index}
                      value={item}
                      variant="outline"
                    >
                      {item}
                    </Radio>
                  );
                })}
              </Stack>
            </RadioGroup>
          </Content>
        ) : (
          // 주관식 입력
          <Content>
            <InputWrapper>
              <Input {...props.register(exerciseIcon.text, { value: '', required: '점수를 입력해주세요' })} />
              <MetricUnits>cm</MetricUnits>
            </InputWrapper>
          </Content>
        )}

        <Buttons>
          <Button type="button" onClick={props.goPrevStep}>
            이전
          </Button>
          <Button type="button" next onClick={props.goNextStep}>
            다음
          </Button>
        </Buttons>
      </FormContainer>
    </Container>
  );
};

export default PracticalScoreInputForm;

const Container = styled.div`
  height: 636px;
  background-color: ${props => props.theme.colors.gray6};
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  min-width: 400px;
  background-color: #fff;
  padding: 32px;
  border-radius: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin-bottom: 12px;
`;

const Information = styled.div`
  border-radius: 16px;
  padding: 8px 16px;
  background-color: rgba(255, 68, 68, 0.1);
  display: flex;
  gap: 0 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.red};
  margin-bottom: 32px;
`;

const InfoIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.red};
`;

const PracticalName = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
`;

const ExerciseIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.blue};
`;

const Content = styled.div``;

const Buttons = styled.div`
  display: flex;
  gap: 0 12px;
  margin-top: 32px;
`;

const Button = styled.button<{ next? }>`
  flex: 1;
  height: 44px;
  border-radius: 16px;
  background-color: ${props => (props.next ? props.theme.colors.blue : props.theme.colors.gray4)};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => (props.next ? props.theme.colors.white : props.theme.colors.gray1)};
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 0px 45px;
  position: relative;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
  text-align: right;
  position: absolute;
  top: 14px;
  right: 45px;
`;

const MetricUnits = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  position: absolute;
  top: 14px;
  right: 24px;
`;
