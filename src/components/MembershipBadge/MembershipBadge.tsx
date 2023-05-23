import React from 'react';
import styled from '@emotion/styled';

interface Props {
  membership: string;
}

function MembershipBadge(props: Props) {
  return (
    <UserMembership color={props.membership}>
      {props.membership === 'basic' && 'Basic'}
      {props.membership === 'light' && 'Light'}
      {props.membership === 'premium' && 'Premium'}
      {props.membership === 'admin' && 'Admin'}
    </UserMembership>
  );
}

export default MembershipBadge;

const UserMembership = styled.div`
  margin-left: 8px;
  height: 20px;
  border-radius: 20px;
  background-color: ${props => (props.color === 'basic' ? '#B7B9C9' : props.color === 'light' ? '#45BFD9' : props.color === 'premiun' ? '#6B77F8' : '#626474')};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  padding: 4px 8px;
  text-align: center;
`;
