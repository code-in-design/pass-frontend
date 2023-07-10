import React from 'react';
import ReservationListContainer from '@/features/reservations/containers/ReservationListContainer';
import AdminLayout from '../../../components/Layout/AdminLayout';

const ReservationsPage = () => {
  return (
    <AdminLayout>
      <ReservationListContainer />
    </AdminLayout>
  );
};

export default ReservationsPage;
