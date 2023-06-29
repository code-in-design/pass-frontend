import React from 'react';
import styled from '@emotion/styled';
import { numberFormattingUtil } from '@/utils/NumberFormattingUtil';

interface Props {
  percent: number[];
  text: string;
}

const PassingProbabilityItem = (props: Props) => {
  const minPercent = props.percent[0];
  const maxPercent = props.percent[1];
  return (
    <Wrapper>
      <Percent>{numberFormattingUtil.formattingPercentage(minPercent, maxPercent)}</Percent>
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
