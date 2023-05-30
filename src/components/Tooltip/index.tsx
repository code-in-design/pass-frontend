import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
  children: ReactNode;
  id: string;
}

const MyTooltip = (props: Props) => {
  return (
    <Tooltip id={props.id} data-tooltip-offset={16} className="tooltip" style={{ backgroundColor: '#fff', width: '371px', padding: '16px', borderRadius: '16px' }}>
      {props.children}
    </Tooltip>
  );
};

export default MyTooltip;
