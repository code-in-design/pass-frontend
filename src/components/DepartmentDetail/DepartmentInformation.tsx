import React from 'react';
import MyTooltip from '../Tooltip';
import { InfoIconWrapper, Information, InformationBox, InformationBoxText, InformationBoxTitle, MenuTitle, TooltipText } from './index.styles';
import Info from '../../../public/images/icons/info.svg';

interface DepartmentInformationProps {}

const DepartmentInformation = (props: DepartmentInformationProps) => {
  return (
    <div>
      <MenuTitle>학과정보</MenuTitle>
      <Information>
        <InformationBox>
          <InformationBoxTitle>모집군</InformationBoxTitle>
          <InformationBoxText>{props.department?.recruitmentGroup}</InformationBoxText>
        </InformationBox>
        <InformationBox>
          <InformationBoxTitle>
            모집정원
            <InfoIconWrapper color="#9395A6" marginLeft="4px" data-tooltip-id="tooltip-recruitmentQuota">
              <Info />
            </InfoIconWrapper>
            <MyTooltip id="tooltip-recruitmentQuota" width="210px">
              <TooltipText>수시 이월을 포함한 정시 모집 인원입니다.</TooltipText>
            </MyTooltip>
          </InformationBoxTitle>
          <InformationBoxText>{props.department?.recruitNumber}</InformationBoxText>
        </InformationBox>
      </Information>
    </div>
  );
};

export default DepartmentInformation;
