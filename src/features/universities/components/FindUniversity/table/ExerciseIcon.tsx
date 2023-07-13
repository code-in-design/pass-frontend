import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import { practicalType } from '@/components/PracticalIcon';

interface Props {
  type: string;
  id: number;
}

const ExerciseIcon = (props: Props) => {
  const practical = practicalType[props.type] || null;

  return (
    <>
      {practical ? (
        <Tooltip hasArrow label={props.type} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
          <ExerciseIconWrapper>{practical.icon}</ExerciseIconWrapper>
        </Tooltip>
      ) : null}
    </>
  );
};

export default ExerciseIcon;

const ExerciseIconWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
