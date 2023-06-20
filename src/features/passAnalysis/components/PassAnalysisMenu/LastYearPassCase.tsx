import React from 'react';
import styled from '@emotion/styled';
import LastYearPassCaseItem from './LastYearPassCaseItem';

interface Props {
  data: {
    avatar: string;
    gender: string;
    zValue: number;
  }[];
}

const LastYearPassCase = (props: Props) => {
  return (
    <Container>
      <Title>작년 합격 사례</Title>
      {props.data.map((item, index) => {
        return <LastYearPassCaseItem key={index} avatar={item.avatar} title={`합격 사례${index + 1}`} gender={item.gender} zValue={item.zValue} />;
      })}
    </Container>
  );
};

export default LastYearPassCase;
LastYearPassCase.defaultProps = {
  data: [
    { avatar: '/images/user/user.png', gender: '남학생', zValue: 3.65 },
    { avatar: '/images/user/user.png', gender: '여학생', zValue: 3.65 },
    { avatar: '/images/user/user.png', gender: '남학생', zValue: 3.65 },
  ],
};

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
