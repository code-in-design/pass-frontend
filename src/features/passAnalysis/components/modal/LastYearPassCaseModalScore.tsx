import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  data: { name: string; score: string }[];
}

const LastYearPassCaseModalScore = (props: Props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Wrapper>
        {props.data.map((item, index) => {
          return (
            <Item key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemScore>{item.score}</ItemScore>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default LastYearPassCaseModalScore;

const Container = styled.div`
  width: 50%;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

const Item = styled.div`
  min-width: 72px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.div`
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 4px;
`;

const ItemScore = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  color: ${props => props.theme.colors.grayBlack};
`;