import React from 'react';
import { Graph, GraphScore, GraphTitle, GraphWrapper } from './index.styles';

interface ApplicationRateGraphProps {
  title: '수능' | '내신' | '실기' | '기타';
}

const ApplicationRateGraph = (props: ApplicationRateGraphProps) => {
  return (
    <GraphWrapper>
      <GraphTitle>{props.title}</GraphTitle>
      <Graph>
        <GraphScore width={`${props.department?.testRate}%`} bgColor={'#6B77F8'}>
          {props.department?.testRate}%
        </GraphScore>
      </Graph>
    </GraphWrapper>
  );
};

export default ApplicationRateGraph;
