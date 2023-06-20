import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import MyTooltip from '@/components/Tooltip';
import HelpOutline from '../../../../public/images/icons/helpOutline.svg';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  tooltip?: boolean;
}

const FindUniversityFilterModalItem = (props: Props) => {
  return (
    <FilterItem>
      <TitleWrapper>
        {props.tooltip && (
          <>
            <HelpIconWrapper data-tooltip-id="tooltip-contribution">
              <HelpOutline />
            </HelpIconWrapper>
            <MyTooltip id="tooltip-contribution" width="auto">
              <TooltipText>반영 비율과 상관없이 합격을 위한 수능 혹은 실기가 차지하는 실질변별력이에요</TooltipText>
            </MyTooltip>
          </>
        )}
        <ItemTitle>{props.title}</ItemTitle>
        <ItemSubTitle>{props.subtitle}</ItemSubTitle>
      </TitleWrapper>
      {props.children}
    </FilterItem>
  );
};

export default FindUniversityFilterModalItem;

const FilterItem = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px solid ${props => props.theme.colors.gray6};
  &:first-of-type {
    border-top: 1px solid #fff;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-bottom: 12px;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;
const ItemSubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
`;

const HelpIconWrapper = styled.div`
  cursor: pointer;
`;

const TooltipText = styled.div`
  color: #000;
`;
