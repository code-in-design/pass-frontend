import React from 'react';
import styled from '@emotion/styled';
import { practicalType } from '@/components/PracticalIcon';

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
          const practical = practicalType[item.name] || { text: '-' };
          return (
            <Item key={index}>
              {props.title === '수능 등급' && <ItemName dangerouslySetInnerHTML={{ __html: `${item.name}` }}></ItemName>}
              {props.title === '실기 성적' && <ItemName dangerouslySetInnerHTML={{ __html: `${practical.text}` }}></ItemName>}
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
  /* max-width: 34px; */
  /* margin: 0 auto 4px; */
`;

const ItemScore = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  color: ${props => props.theme.colors.grayBlack};
`;
