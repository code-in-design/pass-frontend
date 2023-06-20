import React from 'react';
import styled from '@emotion/styled';
import { Checkbox, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';

interface Props {
  type: string;
  index?: number;
  lastType: number;
  goPrevStep: () => void;
  goNextStep: () => void;
}

const PracticalChangeScoreForm = (props: Props) => {
  const exerciseIcon = exerciseType[props.type] || { text: '-', icon: '' };

  return (
    <Container>
      <FormContainer>
        <Title>실기 기록 입력 확인</Title>
        <Information>
          <InfoIconWrapper>
            <ExclamationMark />
          </InfoIconWrapper>
          기록 변경 횟수가 제한되어 있으니 신중히 입력하세요!
        </Information>
        {/* 직접 입력 */}
        <PracticalName>
          <ExerciseIconWrapper>{exerciseIcon.icon}</ExerciseIconWrapper>
          {exerciseIcon.text}
        </PracticalName>
        <Content>
          <InputWrapper>
            <Input />
            <MetricUnits>cm</MetricUnits>
          </InputWrapper>
        </Content>
        {/* 객관식 */}
        <PracticalName>
          <ExerciseIconWrapper>{exerciseIcon.icon}</ExerciseIconWrapper>
          {exerciseIcon.text}
        </PracticalName>
        <Content>
          <RadioGroup>
            <Stack direction="column">
              <Radio value="1" variant="outline">
                3초 이상 유지 후 앞구르기 깔끔하게 수행
              </Radio>
              <Radio value="2" variant="outline">
                1~3초 무난하게 유지 후 앞구르기 깔끔하게 수행
              </Radio>
              <Radio value="3" variant="outline">
                다소 아쉬운 물구나무서기 후 무난한 앞구르기 수행
              </Radio>
            </Stack>
          </RadioGroup>
        </Content>
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

export default PracticalChangeScoreForm;

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
