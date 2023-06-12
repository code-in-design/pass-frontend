import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
  children: ReactNode;
  id: string;
  width: string;
  border?: string;
}

const MyTooltip = (props: Props) => {
  return (
    <Tooltip id={props.id} data-tooltip-offset={16} className="tooltip" style={{ backgroundColor: '#fff', width: props.width, borderRadius: '16px', opacity: 1, border: props.border }}>
      {props.children}
    </Tooltip>
  );
};

export default MyTooltip;
