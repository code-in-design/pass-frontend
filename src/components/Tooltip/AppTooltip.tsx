import { Interpolation, PlacementWithLogical, Tooltip } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TooltipProps {
  isOpen?: boolean; // tooltip이 항상 보이는지 여부
  placement?: PlacementWithLogical; // tooltip의 위치
  offset?: [number, number]; // tooltip과 엘리먼트 사이의 간격
  customStyle?: Interpolation<object>; // tooltip arrow 스타일
  label: string | ReactNode; // tooltip에 나타낼 내용
  children: ReactNode; // tooltip을 가지고 있는 엘리먼트
}

const AppTooltip = (props: TooltipProps) => {
  return (
    <Tooltip isOpen={props.isOpen} placement={props.placement} offset={props.offset} hasArrow bg="#fff" borderRadius="16px" padding="16px" minW="371px" w="100%" css={props.customStyle} label={props.label}>
      {props.children}
    </Tooltip>
  );
};

AppTooltip.defaultProps = {
  isOpen: false,
  placement: 'top-end',
  offset: [0, 26],
  css: { '.chakra-tooltip__arrow-wrapper': { left: '80px !important', width: '10px !important', height: '10px !important', borderWidth: '1px !important', bottom: '-5px !important' } },
};

export default AppTooltip;
