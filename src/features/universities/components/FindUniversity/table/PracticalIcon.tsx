import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import { practicalType } from '@/components/PracticalIcon';

interface Props {
  type: string;
  id: number;
}

const PracticalIcon = (props: Props) => {
  const practical = practicalType[props.type] || null;

  if (!practical) return null;
  return (
    <Tooltip hasArrow label={props.type} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
      <PracticalIconWrapper>{practical.icon}</PracticalIconWrapper>
    </Tooltip>
  );
};

export default PracticalIcon;

const PracticalIconWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
