import React from 'react';
import { DashboardContainer } from '@/features/admin/AdminDashboard/containers/DashboardContainer';
import AdminLayout from '../../../components/Layout/AdminLayout';

const DashboardPage = () => {
  return (
    <AdminLayout>
      <DashboardContainer />
    </AdminLayout>
  );
};

export default DashboardPage;
