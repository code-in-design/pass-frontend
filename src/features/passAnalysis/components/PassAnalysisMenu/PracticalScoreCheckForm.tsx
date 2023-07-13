import React from 'react';
import styled from '@emotion/styled';
import { practicalType } from '@/components/PracticalIcon';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';
import { UseFormGetValues, FieldValues } from 'react-hook-form';

interface Props {
  types: { name: string; multipleChoice?: string[] }[];
  goPrevStep: () => void;
  getValues: UseFormGetValues<FieldValues>;
  onClickConfirm: () => void;
}

const PracticalScoreCheckForm = (props: Props) => {
  const typesName = props.types.map(types => types.name);
  const practicalResults = props.getValues(typesName);

  return (
    <Container>
      <FormContainer>
        <Title>실기 기록 입력 확인</Title>
        <Information>
          <InfoIconWrapper>
            <ExclamationMark />
          </InfoIconWrapper>
          입력한 실기 기록이 정확한지 다시 한 번 확인해주세요!
        </Information>
        {props.types.map((type, index) => {
          const practical = practicalType[type.name] || { text: '-', icon: '' };
          return (
            <React.Fragment key={index}>
              <PracticalName>
                <ExerciseIconWrapper>{practical.icon}</ExerciseIconWrapper>
                {practical.text}
              </PracticalName>
              <Content>
                <InputWrapper>
                  <Result>{practicalResults[index]}</Result>
                  {!type.multipleChoice && <MetricUnits>cm</MetricUnits>}
                </InputWrapper>
              </Content>
            </React.Fragment>
          );
        })}

        <Buttons>
          <Button type="button" onClick={props.goPrevStep}>
            이전
          </Button>
          <Button type="submit" next onClick={props.onClickConfirm}>
            확인
          </Button>
        </Buttons>
      </FormContainer>
    </Container>
  );
};

export default PracticalScoreCheckForm;

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
  min-height: 400px;
  height: 552px;
  background-color: #fff;
  padding: 32px;
  overflow-y: scroll;
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
  width: 336px;
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
  margin-top: 16px;
  margin-bottom: 8px;
  :first-of-type {
    margin-top: 0;
  }
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
  padding: 12px;
  display: flex;
  align-items: flex-end;
`;

const Result = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;

const MetricUnits = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  margin-left: 8px;
`;
