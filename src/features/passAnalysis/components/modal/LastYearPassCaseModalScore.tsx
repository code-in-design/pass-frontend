import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  data: { name: string; score: string }[];
}

const exerciseType = {
  '10m달리기': {
    text: '10m 달리기',
  },
  '20m달리기': {
    text: '20m 달리기',
  },
  '25m달리기': {
    text: '25m 달리기',
  },
  '50m달리기': {
    text: '50m 달리기',
  },
  '80m달리기': {
    text: '80m 달리기',
  },
  '100m달리기': {
    text: '100m 달리기',
  },
  '800m달리기': {
    text: '800m 달리기',
  },
  농구: {
    text: '농구',
  },
  농구공던지기: {
    text: '농구공던지기',
  },
  높이뛰기: {
    text: '높이뛰기',
  },
  매달리기: {
    text: '매달리기',
  },
  메디신볼던지기: {
    text: '메디신볼던지기',
  },
  배구: {
    text: '배구',
  },
  배근력: {
    text: '배근력',
  },
  사이드스텝: {
    text: '사이드스텝',
  },
  서전트점프: {
    text: '서전트점프',
  },
  셔틀런: {
    text: '셔틀런',
  },
  순환식계측: {
    text: '순환식계측',
  },
  십자런: {
    text: '십자런',
  },
  싯업: {
    text: '싯업',
  },
  앉아메디신볼던지기: {
    text: '앉아메디신볼<br/> 던지기',
  },
  전공: {
    text: '전공',
  },
  제자리3단뛰기: {
    text: '제자리3단뛰기',
  },
  '제자리 멀리뛰기': {
    text: '제자리<br/>멀리뛰기',
  },
  좌전굴: {
    text: '좌전굴',
  },
  중량런: {
    text: '중량런',
  },
  체전굴: {
    text: '체전굴',
  },
  체조: {
    text: '체조',
  },
  축구: {
    text: '축구',
  },
  핸드볼공던지기: {
    text: '핸드볼<br/>공던지기',
  },
  허들: {
    text: '허들',
  },
};

const LastYearPassCaseModalScore = (props: Props) => {
  console.log(props.title, props.data);
  return (
    <Container>
      <Title>{props.title}</Title>
      <Wrapper>
        {props.data.map((item, index) => {
          const exerciseIcon = exerciseType[item.name] || { text: '-' };
          return (
            <Item key={index}>
              {props.title === '수능 등급' && <ItemName dangerouslySetInnerHTML={{ __html: `${item.name}` }}></ItemName>}
              {props.title === '실기 성적' && <ItemName dangerouslySetInnerHTML={{ __html: `${exerciseIcon.text}` }}></ItemName>}
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
