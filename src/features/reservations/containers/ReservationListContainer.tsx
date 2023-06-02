import AdminReservationsPage from '@/pages/admin/ReservationsPage';
import { useFetchReservationsQuery } from '../apis/reservationApi';

const ReservationListContainer = () => {
  const fetchReservation = useFetchReservationsQuery({ page: 1, limit: 10, range: 10 });
  return <AdminReservationsPage list={fetchReservation.data} />;
};

export default ReservationListContainer;
