import React from 'react';
import MyTooltip from '../Tooltip';
import HelpOutline from '../../../public/images/icons/helpOutline.svg';
import { HelpIconWrapper, InformationMethod, InformationMethodTitle, MenuTitle, TooltipText, Wrapper } from './index.styles';
import ApplicationRateGraph from './ApplicationRateGraph';

const ApplicationRate = () => {
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
        <ApplicationRateGraph title="수능" />
        <ApplicationRateGraph title="내신" />
        <ApplicationRateGraph title="실기" />
        <ApplicationRateGraph title="기타" />
      </InformationMethod>
    </div>
  );
};

export default ApplicationRate;
