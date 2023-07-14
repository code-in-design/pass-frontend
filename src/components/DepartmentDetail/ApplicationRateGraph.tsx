import React, { useEffect, useState } from 'react';
import { Graph, GraphScore, GraphTitle, GraphWrapper } from './index.styles';

interface ApplicationRateGraphProps {
  title: '수능' | '내신' | '실기' | '기타';
  rate: Record<string, any> | undefined;
}

const ApplicationRateGraph = (props: ApplicationRateGraphProps) => {
  const backgroundColor = () => {
    if (props.title === '내신') return '#AA83FF';
    if (props.title === '실기') return '#60C8DE';
    if (props.title === '기타') return '#9395A6';
    return '#6B77F8';
  };

  return (
    <GraphWrapper>
      <GraphTitle>{props.title}</GraphTitle>
      <Graph>
        <GraphScore width={`${props?.rate}%`} bgColor={backgroundColor()}>
          {`${props?.rate}%`}
        </GraphScore>
      </Graph>
    </GraphWrapper>
  );
};

export default ApplicationRateGraph;
