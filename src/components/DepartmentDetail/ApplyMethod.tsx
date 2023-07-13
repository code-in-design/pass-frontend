import React from 'react';
import MyTooltip from '../Tooltip';
import HelpOutline from '../../../public/images/icons/helpOutline.svg';
import { Graph, GraphScore, GraphTitle, GraphWrapper, HelpIconWrapper, InformationMethod, InformationMethodTitle, MenuTitle, TooltipText, Wrapper } from './index.styles';

const ApplyMethod = () => {
  return (
    <div>
      <Wrapper>
        <MenuTitle>전형 방법</MenuTitle>
        {props.department?.isMultistage && (
          <InformationMethodTitle>
            다단계 전형 세부사항
            <HelpIconWrapper data-tooltip-id="tooltip-universityDetail">
              <HelpOutline />
            </HelpIconWrapper>
            <MyTooltip id="tooltip-universityDetail" width="180px">
              <TooltipText>{props.department?.multistageDetail}</TooltipText>
            </MyTooltip>
          </InformationMethodTitle>
        )}
      </Wrapper>
      <InformationMethod>
        <GraphWrapper>
          <GraphTitle>수능</GraphTitle>
          <Graph>
            <GraphScore width={`${props.department?.testRate}%`} bgColor={'#6B77F8'}>
              {props.department?.testRate}%
            </GraphScore>
          </Graph>
        </GraphWrapper>
        <GraphWrapper>
          <GraphTitle>내신</GraphTitle>
          <Graph>
            <GraphScore width={`${props.department?.naesinRate}%`} bgColor={'#AA83FF'}>
              {props.department?.naesinRate}%
            </GraphScore>
          </Graph>
        </GraphWrapper>
        <GraphWrapper>
          <GraphTitle>실기</GraphTitle>
          <Graph>
            <GraphScore width={`${props.department?.practicalRate}%`} bgColor={'#60C8DE'}>
              {props.department?.practicalRate}%
            </GraphScore>
          </Graph>
        </GraphWrapper>
        <GraphWrapper>
          <GraphTitle>기타</GraphTitle>
          <Graph>
            <GraphScore width={`${props.department?.etcRate}%`} bgColor={'#9395a6'}>
              {props.department?.etcRate}%
            </GraphScore>
          </Graph>
        </GraphWrapper>
      </InformationMethod>
    </div>
  );
};

export default ApplyMethod;
