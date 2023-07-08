import React from 'react';
import ReservationListContainer from '@/features/reservations/containers/ReservationListContainer';
import Layout from '../../components/Layout/Layout';

const ReservationsPage = () => {
  return (
    <Layout>
      <ReservationListContainer />
    </Layout>
  );
};

export default ReservationsPage;
