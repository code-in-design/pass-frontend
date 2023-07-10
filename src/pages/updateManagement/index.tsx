import React from 'react';
import Layout from '@/components/Layout/Layout';
import UpdateManagementContainer from '@/features/admin/AdminUpdateManagement/containers/UpdateManagementContainer';

const UserListPage = () => {
  return (
    <Layout>
      <UpdateManagementContainer />
    </Layout>
  );
};

export default UserListPage;
