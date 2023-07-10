import React from 'react';
import { DashboardContainer } from '@/features/admin/AdminDashboard/containers/DashboardContainer';
import Layout from '../../components/Layout/Layout';

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardContainer />
    </Layout>
  );
};

export default DashboardPage;
