import React from 'react';
import styled from '@emotion/styled';
import ArrowLeftCircle from '../../../../public/images/icons/arrowLeftCircle.svg';

const NoSelectAnalysisUniversity = () => {
  return (
    <Container>
      <IconWrapper>
        <ArrowLeftCircle />
      </IconWrapper>
      <Text>좌측에서 합격을 분석할 대학 · 학과를 선택해주세요</Text>
    </Container>
  );
};

export default NoSelectAnalysisUniversity;

const Container = styled.div`
  width: 100%;
  height: 636px;
  padding-top: 236px;
`;

const IconWrapper = styled.div`
  width: 128px;
  height: 128px;
  margin: 0 auto;
`;

const Text = styled.div`
  margin-top: 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray2};
  text-align: center;
`;
