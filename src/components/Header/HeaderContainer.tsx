import React from 'react';
import Header from './index';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import MembershipBadge from '../MembershipBadge';

function HeaderContainer() {
  const { data } = useFetchMeQuery();

  return (
    <Header name={data?.name} email={data?.email}>
      <MembershipBadge membership={data?.membership} />
    </Header>
  );
}

export default HeaderContainer;
