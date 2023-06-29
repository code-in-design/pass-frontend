import React from 'react';
import styled from '@emotion/styled';

interface Props {
  percent: number[];
  text: string;
}

const PassingProbabilityItem = (props: Props) => {
  return (
    <Wrapper>
      <Percent>
        {props.percent[0]}
        {props.percent.length !== 1 && '~'}
        {props.percent[1]}%
      </Percent>
      <div dangerouslySetInnerHTML={{ __html: `${props.text}` }}></div>
    </Wrapper>
  );
};

export default PassingProbabilityItem;

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
`;

const Percent = styled.div`
  width: 72px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.grayBlack};
`;
