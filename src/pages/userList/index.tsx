import React from 'react';
import { UserListContainer } from '@/features/admin/AdminUserList/containers/UserListContainer';
import AdminLayout from '@/components/Layout/AdminLayout';

const UserListPage = () => {
  return (
    <AdminLayout>
      <UserListContainer />
    </AdminLayout>
  );
};

export default UserListPage;
