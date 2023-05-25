import React, { useEffect, useState } from 'react';
import Header from './index';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import { UserModel } from '@/models/UserModel';
import MembershipBadge from '../MembershipBadge';
import { useRouter } from 'next/router';
import { getLocalStorage, getSessionStorage } from '@/utils';

function HeaderContainer() {
  const router = useRouter();
  const { data, isSuccess, isLoading } = useFetchMeQuery();
  const [user, setUser] = useState<UserModel>({ userName: '', userEmail: '', membership: '' });

  useEffect(() => {
    const result = JSON.parse(data);
    if (isSuccess) {
      const getUser = new UserModel(result.name, result.membership, result.email);
      setUser(getUser);
    }
    // const accessToken = getSessionStorage('accessToken') || getLocalStorage('accessToken');
    // // accessToken이 있을경우 데이터를 가져온다.
    // if (accessToken) {
    //   getUserData();
    // }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return <Header name={user.userName} membership={<MembershipBadge membership={user.membership} />} email={user.userEmail} />;
}

export default HeaderContainer;
