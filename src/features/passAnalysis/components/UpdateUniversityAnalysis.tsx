import React from 'react';
import styled from '@emotion/styled';
import Refresh from '../../../../public/images/icons/refresh.svg';
import Alarm from '../../../../public/images/icons/alarm.svg';

interface Props {
  updateDate: string;
}

const UpdateUniversityAnalysis = (props: Props) => {
  return (
    <Container>
      <RefreshWrapper>
        <Refresh />
      </RefreshWrapper>
      <Title>세부 합격 분석 업데이트 중입니다</Title>
      <Text>
        세부 합격 분석 첫 업데이트는
        <Time>
          <AlarmWrapper>
            <Alarm />
          </AlarmWrapper>
          {props.updateDate}
        </Time>
        에 진행됩니다.
      </Text>
      <Text>조금만 기다려주세요!</Text>
    </Container>
  );
};

UpdateUniversityAnalysis.defaultProps = {
  updateDate: '2024년 01월 06일 00시',
};

export default UpdateUniversityAnalysis;

const Container = styled.div`
  padding-top: 160px;
`;

const RefreshWrapper = styled.div`
  width: 128px;
  height: 128px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 12px 0;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray1};
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Time = styled.div`
  width: fit-content;
  height: 28px;
  border-radius: 8px;
  padding: 4px 8px;
  background: rgba(107, 119, 248, 0.1);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.blue};
  margin: 0 4px;
  display: flex;
`;

const AlarmWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.blue};
  margin-right: 4px;
`;
