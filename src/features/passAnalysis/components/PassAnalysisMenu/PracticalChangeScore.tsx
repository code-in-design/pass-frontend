import React from 'react';
import styled from '@emotion/styled';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';

interface Props {
  type: string;
}

const PracticalChangeScore = (props: Props) => {
  const exerciseIcon = exerciseType[props.type] || { text: '-', icon: '' };
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
        <PracticalName>
          <ExerciseIconWrapper>{exerciseIcon.icon}</ExerciseIconWrapper>
          {exerciseIcon.text}
        </PracticalName>
      </FormContainer>
    </Container>
  );
};

export default PracticalChangeScore;

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
