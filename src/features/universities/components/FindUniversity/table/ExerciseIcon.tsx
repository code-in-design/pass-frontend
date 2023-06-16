import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';

interface Props {
  type: string;
  id: number;
}

const ExerciseIcon = (props: Props) => {
  const exercise = exerciseType[props.type] || null;
  return (
    <Tooltip hasArrow label={props.type} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
      <ExerciseIconWrapper>{exercise.icon}</ExerciseIconWrapper>
    </Tooltip>
  );
};

export default ExerciseIcon;

const ExerciseIconWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
