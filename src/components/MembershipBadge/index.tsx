import React from 'react';
import styled from '@emotion/styled';

const badgeProps = {
  basic: {
    text: 'Basic',
    color: '#B7B9C9',
  },
  light: {
    text: 'Light',
    color: '#45BFD9',
  },
  premium: {
    text: 'Premium',
    color: '#6B77F8',
  },
  admin: {
    text: 'Admin',
    color: '#626474',
  },
};

interface Props {
  membership: string;
}

function MembershipBadge(props: Props) {
  const membershipProps = badgeProps[props.membership] || { text: 'Basic', color: '#B7B9C9' };
  return <UserMembership color={membershipProps.color}>{membershipProps.text}</UserMembership>;
}

export default MembershipBadge;

const UserMembership = styled.div`
  margin-left: 8px;
  height: 20px;
  border-radius: 20px;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 4px 8px;
  text-align: center;
`;
