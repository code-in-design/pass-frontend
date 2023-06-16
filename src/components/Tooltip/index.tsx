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
    <Tooltip id={props.id} data-tooltip-offset={16} className="tooltip" style={{ backgroundColor: '#fff', width: props.width, borderRadius: '16px', opacity: '1 !important', border: props.border, boxShadow: '2px 6px 24px -4px rgba(36,62,113,0.08)' }}>
      {props.children}
    </Tooltip>
  );
};

export default MyTooltip;
