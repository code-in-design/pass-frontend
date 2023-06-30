import React from 'react';
import styled from '@emotion/styled';

type tagType = '안정' | '적정' | '소신' | '지원불가' | '안정 지원' | '적정 지원' | '소신 지원' | '우주 상향';

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

const Supportability = styled.div<{ type: tagType }>`
  width: 64px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-weight: 600;

  color: ${props => (props.type === '안정' || props.type === '안정 지원') && '#4F8AFC'};
  color: ${props => (props.type === '적정' || props.type === '적정 지원') && '#00A070'};
  color: ${props => (props.type === '소신' || props.type === '소신 지원') && '#F66514'};
  color: ${props => props.type === '우주 상향' && '#B48C00'};
  color: ${props => props.type === '지원불가' && '#FF4444'};

  background-color: ${props => (props.type === '안정' || props.type === '안정 지원') && 'rgba(79, 138, 252, 0.2)'};
  background-color: ${props => (props.type === '적정' || props.type === '적정 지원') && 'rgba(30, 203, 151, 0.2)'};
  background-color: ${props => (props.type === '소신' || props.type === '소신 지원') && 'rgba(255, 131, 62, 0.2);'};
  background-color: ${props => props.type === '우주 상향' && 'rgba(255, 199, 0, 0.2)'};
  background-color: ${props => props.type === '지원불가' && 'rgba(254, 117, 117, 0.2);'};
`;
