import React, { useEffect, useState } from 'react';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import { UserModel } from '@/models/UserModel';
import MyAccount from '../components/MyAccount';

const MyAccountContainer = () => {
  const { data, isSuccess, isLoading } = useFetchMeQuery();
  const [account, setAccount] = useState({ name: '', email: '', grade: '', gender: '' });

  useEffect(() => {
    if (isSuccess) {
      const result = JSON.parse(data);
      const userModel = new UserModel();
      const getAccont = userModel.formatMyAccount(result);
      setAccount(getAccont);
    }
  }, [data]);

  return <MyAccount name={account.name} email={account.email} gender={account.gender} grade={account.grade} />;
};

export default MyAccountContainer;
