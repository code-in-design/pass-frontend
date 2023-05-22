import React, { useEffect } from 'react';
import Header from './index';
import { useGetMeQuery } from '@/features/auth/authApi';
import { UserModel } from '@/models/UserModel';

function HeaderContainer() {
  const { data } = useGetMeQuery();
  // const user = new UserModel(data.name,data.membership,data.email,data.avatar);
  console.log(data);

  return (
    <div>header</div>
    // <Header avatar={data} name={data.name} membership={ } email={data.email } />
  );
}

export default HeaderContainer;
