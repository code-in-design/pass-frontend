import React from 'react';
import styled from '@emotion/styled';
import { PracticalType, practicalType } from '@/components/PracticalIcon';

interface Props {
  type: string;
  isSelected?: boolean;
  onClick?: (item: PracticalType) => void;
}

const PracticalTag = (props: Props) => {
  const practical = practicalType[props.type] || { text: '-', icon: '' };
  const Component = props.isSelected ? SelectPracticalItem : PracticalItem;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(practical.text);
    }
  };

  return (
    <Component onClick={handleClick}>
      {practical.icon}
      <PracticalTitle isSelected={props.isSelected || false}>{practical.text}</PracticalTitle>
    </Component>
  );
};

export default PracticalTag;

const PracticalItem = styled.div`
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

const SelectPracticalItem = styled.div`
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

const PracticalTitle = styled.div<{ isSelected: boolean }>`
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.isSelected ? props.theme.colors.white : props.theme.colors.gray1)};
  font-weight: 600;
`;
