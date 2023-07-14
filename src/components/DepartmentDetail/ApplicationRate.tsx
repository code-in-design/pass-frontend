import React from 'react';
import MyTooltip from '../Tooltip';
import HelpOutline from '../../../public/images/icons/helpOutline.svg';
import { HelpIconWrapper, InformationMethod, InformationMethodTitle, MenuTitle, TooltipText, Wrapper } from './index.styles';
import ApplicationRateGraph from './ApplicationRateGraph';

interface ApplicationRateProps {
  data: Record<string, any> | undefined;
}

const ApplicationRate = (props: ApplicationRateProps) => {
  return (
    <div>
      <Wrapper>
        <MenuTitle>전형 방법</MenuTitle>
        {props.data?.isMultistage && (
          <InformationMethodTitle>
            다단계 전형 세부사항
            <HelpIconWrapper data-tooltip-id="tooltip-universityDetail">
              <HelpOutline />
            </HelpIconWrapper>
            <MyTooltip id="tooltip-universityDetail" width="180px">
              <TooltipText>{props.data?.multistageDetail}</TooltipText>
            </MyTooltip>
          </InformationMethodTitle>
        )}
      </Wrapper>
      <InformationMethod>
        <ApplicationRateGraph title="수능" rate={props?.data?.testRate} />
        <ApplicationRateGraph title="내신" rate={props?.data?.naesinRate} />
        <ApplicationRateGraph title="실기" rate={props?.data?.practicalRate} />
        <ApplicationRateGraph title="기타" rate={props?.data?.etcRate} />
      </InformationMethod>
    </div>
  );
};

export default ApplicationRate;
