import React, { useEffect, useState } from 'react';
import Header from './index';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import { UserModel } from '@/models/UserModel';
import MembershipBadge from '../MembershipBadge';

function HeaderContainer() {
  const { data, isSuccess, isLoading } = useFetchMeQuery();
  const [user, setUser] = useState<UserModel>({ userName: '', userEmail: '', membership: '' });

  useEffect(() => {
    if (isSuccess) {
      const result = JSON.parse(data);
      const getUser = new UserModel(result.name, result.membership, result.email);
      setUser(getUser);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Header name={user.userName} email={user.userEmail}>
      <MembershipBadge membership={user.membership} />
    </Header>
  );
}

export default HeaderContainer;
