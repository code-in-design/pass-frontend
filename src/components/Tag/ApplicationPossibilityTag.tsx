import React from 'react';
import styled from '@emotion/styled';

const ApplicationPossibilityTag = props => {
  const { value } = props;
  return (
    <SupportabilityWrapper>
      <Supportability type={value}>{value}</Supportability>
    </SupportabilityWrapper>
  );
};

export default ApplicationPossibilityTag;

const SupportabilityWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Supportability = styled.div<{ type: string }>`
  width: 64px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-weight: 600;

  color: ${props => props.type === '안정' && '#4F8AFC'};
  color: ${props => props.type === '적정' && '#00A070'};
  color: ${props => props.type === '소신' && '#F66514'};
  color: ${props => props.type === '지원불가' && '#FF4444'};

  background-color: ${props => props.type === '안정' && 'rgba(79, 138, 252, 0.2)'};
  background-color: ${props => props.type === '적정' && 'rgba(30, 203, 151, 0.2)'};
  background-color: ${props => props.type === '소신' && 'rgba(255, 131, 62, 0.2);'};
  background-color: ${props => props.type === '지원불가' && 'rgba(254, 117, 117, 0.2);'};
`;
