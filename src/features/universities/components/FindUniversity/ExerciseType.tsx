import React from 'react';
import styled from '@emotion/styled';
import { exerciseType } from '@/components/PracticalIcon/PracticalType';

interface Props {
  type: string;
  isSelected?: boolean;
  onClick?: (item?: string) => void;
}

const ExerciseType = (props: Props) => {
  const exercise = exerciseType[props.type] || { text: '-', icon: '' };
  const Component = props.isSelected ? SelectExerciseItem : ExerciseItem;
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(exercise.text);
    }
  };
  return (
    <Component onClick={handleClick}>
      {exercise.icon}
      <ExerciseTitle isSelected={props.isSelected || false}>{exercise.text}</ExerciseTitle>
    </Component>
  );
};

export default ExerciseType;

const ExerciseItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.gray6};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const SelectExerciseItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const ExerciseTitle = styled.div<{ isSelected: boolean }>`
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.gray1)};
  font-weight: 600;
`;
