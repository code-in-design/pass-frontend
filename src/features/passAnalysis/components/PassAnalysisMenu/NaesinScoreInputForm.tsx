import React from 'react';
import styled from '@emotion/styled';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';
import NaesinScoreInputModal from '../modal/NaesinScoreInputModal';

interface Props {
  step: number;
  scores: { title: string }[];
  goPrevStep: () => void;
  goNextStep: () => void;
}

const NaesinScoreInputForm = (props: Props) => {
  return (
    <Container>
      <FormContainer>
        <Title>학생부 교과 성적 입력</Title>
        <Information>
          <InfoIconWrapper>
            <ExclamationMark />
          </InfoIconWrapper>
          각 학년 학기별 성적을 클릭해 입력해주세요.
        </Information>
        {props.scores.map((score, index) => {
          return <NaesinScoreInputModal key={index} title={score.title} />;
        })}
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

NaesinScoreInputForm.defaultProps = {
  scores: [{ title: '1학년 1학기 성적' }, { title: '1학년 2학기 성적' }, { title: '2학년 1학기 성적' }, { title: '2학년 2학기 성적' }, { title: '3학년 1학기 성적' }, { title: '3학년 2학기 성적' }],
};
export default NaesinScoreInputForm;

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
  background-color: ${props => props.theme.colors.gray5};
  display: flex;
  gap: 0 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 32px;
`;

const InfoIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.gray2};
`;

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
