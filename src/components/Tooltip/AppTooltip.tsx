import { Interpolation, PlacementWithLogical, Tooltip } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TooltipProps {
  isOpen?: boolean;
  placement?: PlacementWithLogical;
  offset?: [number, number];
  css?: Interpolation<object>;
  label: string | ReactNode;
  children: ReactNode;
}

const AppTooltip = (props: TooltipProps) => {
  return (
    <Tooltip isOpen={props.isOpen} placement={props.placement} offset={props.offset} hasArrow bg="#fff" borderRadius="16px" padding="16px" minW="371px" w="100%" css={props.css} label={props.label}>
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
