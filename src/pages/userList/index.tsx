import React from 'react';
import Layout from '@/components/Layout/Layout';
import { UserListContainer } from '@/features/admin/AdminUserList/containers/UserListWrapper';

const UserListPage = () => {
  return (
    <Layout>
      <UserListContainer />
    </Layout>
  );
};

export default UserListPage;
