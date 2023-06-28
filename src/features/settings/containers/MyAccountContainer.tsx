import React from 'react';
import { useFetchMeQuery } from '@/features/auth/apis/authApi';
import MyAccount from '../components/MyAccount';
import { UserModel } from '@/models/UserModel';

const MyAccountContainer = () => {
  const { data } = useFetchMeQuery();
  const user = new UserModel();
  const gender = user.translateGender(data?.gender);
  const grade = user.translateGrade(data?.grade);

  return <MyAccount name={data?.name} email={data?.email} gender={gender} grade={grade} />;
};

export default MyAccountContainer;
