import React from 'react';
import styled from '@emotion/styled';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';
import { UseFormRegister, FieldValues, UseFormSetValue, UseFormGetValues } from 'react-hook-form';

interface Props {
  step: number;
  goPrevStep: () => void;
  goNextStep: () => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const VolunteerAttendanceInputForm = (props: Props) => {
  return (
    <Container>
      <FormContainer>
        <Title>봉사시간 및 출결 입력</Title>
        <Information>
          <InfoIconWrapper>
            <ExclamationMark />
          </InfoIconWrapper>
          결석 일자는 미인정만 반영합니다.
        </Information>

        <div>
          <InpuwTitle>봉사시간</InpuwTitle>
          <InputWrapper>
            <Input {...props.register('volunteerTime', { required: '봉사시간을 입력해주세요' })} />
            <InputSubText>시간</InputSubText>
          </InputWrapper>
        </div>

        <Wrapper>
          <div>
            <InpuwTitle>미인정 결석 수</InpuwTitle>
            <InputWrapper>
              <Input {...props.register('absence', { required: '미인정 결석수를 입력해주세요' })} />
              <InputSubText>회</InputSubText>
            </InputWrapper>
          </div>
          <div>
            <InpuwTitle>미인정 지각 수</InpuwTitle>
            <InputWrapper>
              <Input {...props.register('lateNumber', { required: '미인정 지각수를 입력해주세요' })} />
              <InputSubText>회</InputSubText>
            </InputWrapper>
          </div>
        </Wrapper>

        <Wrapper>
          <div>
            <InpuwTitle>미인정 조퇴 수</InpuwTitle>
            <InputWrapper>
              <Input {...props.register('earlyLeaveNumber', { required: '미인정 조퇴수를 입력해주세요' })} />
              <InputSubText>회</InputSubText>
            </InputWrapper>
          </div>
          <div>
            <InpuwTitle>미인정 결과 수</InpuwTitle>
            <InputWrapper>
              <Input {...props.register('resultNumber', { required: '미인정 결과수를 입력해주세요' })} />
              <InputSubText>회</InputSubText>
            </InputWrapper>
          </div>
        </Wrapper>

        <Buttons>
          <Button type="button" onClick={props.goNextStep}>
            다음
          </Button>
        </Buttons>
      </FormContainer>
    </Container>
  );
};

export default VolunteerAttendanceInputForm;

const Container = styled.div`
  height: 636px;
  background-color: ${props => props.theme.colors.gray6};
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 82px;
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
  background-color: rgba(96, 200, 222, 0.1);
  display: flex;
  gap: 0 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.deepGreen};
  margin-bottom: 32px;
`;

const InfoIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.deepGreen};
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 0px 45px;
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
  text-align: right;
  width: 100%;
`;

const InputSubText = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0 32px;
  margin-top: 16px;
`;

const InpuwTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0 12px;
  margin-top: 32px;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 50%;
  height: 44px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.blue};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;
