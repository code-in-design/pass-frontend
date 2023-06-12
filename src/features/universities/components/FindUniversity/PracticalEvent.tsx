import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
}

const PracticalEvent = (props: Props) => {
  return (
    <PracticalEventItem>
      <PracticalEventIcon />
      <PracticalEventTitle>{props.title}</PracticalEventTitle>
    </PracticalEventItem>
  );
};

export default PracticalEvent;

const PracticalEventItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.gray6};
  &:last-of-type {
    margin-right: 0;
  }
`;

const PracticalEventIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const PracticalEventTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
`;
