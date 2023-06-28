import React, { useEffect, useState } from 'react';
import Header from './index';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import { UserModel } from '@/models/UserModel';
import MembershipBadge from '../MembershipBadge';

function HeaderContainer() {
  const { data, isSuccess, isLoading } = useFetchMeQuery();
  const [user, setUser] = useState({ name: '', email: '', membership: '' });

  useEffect(() => {
    if (isSuccess) {
      const result = JSON.parse(data);
      const userModel = new UserModel();
      const getUser = userModel.formatHeader(result);
      setUser(getUser);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Header name={user.name} email={user.email}>
      <MembershipBadge membership={user.membership} />
    </Header>
  );
}

export default HeaderContainer;
