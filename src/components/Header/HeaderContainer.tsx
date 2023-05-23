import React, { useEffect, useState } from 'react';
import Header from './index';
import { useGetMeQuery } from '@/features/auth/authApi';
import { UserModel } from '@/models/UserModel';
import MembershipBadge from '../MembershipBadge/MembershipBadge';
import { useRouter } from 'next/router';
import { useGetIssuedTokenQuery } from '@/app/api';

function HeaderContainer() {
  const router = useRouter();
  const { data, isError, isSuccess, isLoading } = useGetMeQuery();
  const newAccessToken = useGetIssuedTokenQuery();
  const [user, setUser] = useState<UserModel>({ userName: '', userEmail: '', membership: '' });

  const getUserData = () => {
    if (isSuccess) {
      const getUser = new UserModel(data.name, data.membership, data.email);
      setUser(getUser);
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    const refreshToken = window.localStorage.getItem('refreshToken');
    // accessToken이 있을경우 데이터를 가져온다.
    if (accessToken) {
      getUserData();
    }
    // accessToken이 없을경우, refreshToken을 사용해 새로운 accessToken을 발급받는다.
    if (!accessToken) {
      newAccessToken;
      window.localStorage.setItem('refreshToken', newAccessToken.data.access_token);
      console.log(newAccessToken);
    }
    if (!refreshToken) {
      router.push('/signIn');
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return <Header name={user.userName} membership={<MembershipBadge membership={user.membership} />} email={user.userEmail} />;
}

export default HeaderContainer;
