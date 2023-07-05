import React from 'react';
import AdminLayout from '../../../features/admin/AdminLayout/AdminLayout';
import { DashboardContainer } from '@/features/admin/AdminDashboard/containers/DashboardContainer';

// type Props = {};

const AdminDashBoardPage = () => {
  return (
    <AdminLayout>
      <DashboardContainer />
    </AdminLayout>
  );
};

export default AdminDashBoardPage;
