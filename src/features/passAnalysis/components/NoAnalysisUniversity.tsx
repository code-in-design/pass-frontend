import React from 'react';
import styled from '@emotion/styled';
import Sad from '../../../../public/images/icons/sad.svg';

const NoAnalysisUniversity = () => {
  return (
    <Container>
      <IconWrapper>
        <Sad />
      </IconWrapper>
      <Text>서비스를 지원하지 않는 대학입니다</Text>
    </Container>
  );
};

export default NoAnalysisUniversity;

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
