import React from 'react';
import styled from '@emotion/styled';
import ApplicationPossibilityTag from '@/components/Tag/ApplicationPossibilityTag';

interface Props {
  tag: string;
  text: string;
}

const ApplyPossibilityItem = (props: Props) => {
  return (
    <Wrapper>
      <ApplicationPossibilityTag value={props.tag} />
      {props.text}
    </Wrapper>
  );
};

export default ApplyPossibilityItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.gray1};
`;
