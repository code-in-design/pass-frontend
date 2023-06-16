import React from 'react';
import styled from '@emotion/styled';

const LastYearPassCase = () => {
  return (
    <Container>
      <Title>작년 합격 사례</Title>
    </Container>
  );
};

export default LastYearPassCase;

const Container = styled.div`
  margin-top: 32px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;
