import React from 'react';
import MyTooltip from '../Tooltip';
import { InfoIconWrapper, InformationBox, InformationBoxText, InformationBoxTitle, TooltipText } from './index.styles';
import Info from '../../../public/images/icons/info.svg';

interface DepartmentInformationBoxProps {
  title: string;
  text: string;
  tooltip?: boolean;
  tooltipText?: string;
}

const DepartmentInformationBox = (props: DepartmentInformationBoxProps) => {
  return (
    <InformationBox>
      <InformationBoxTitle>
        {props.title}
        {props?.tooltip && (
          <>
            <InfoIconWrapper color="#9395A6" marginLeft="4px" data-tooltip-id="tooltip-recruitmentQuota">
              <Info />
            </InfoIconWrapper>
            <MyTooltip id="tooltip-recruitmentQuota" width="210px">
              <TooltipText>{props?.tooltipText}</TooltipText>
            </MyTooltip>
          </>
        )}
      </InformationBoxTitle>
      <InformationBoxText>{props.text}</InformationBoxText>
    </InformationBox>
  );
};

export default DepartmentInformationBox;
