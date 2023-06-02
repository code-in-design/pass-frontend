import { useFetchReservationsQuery } from '../apis/reservationApi';
import ReservationList from '../components/ReservationList';

const ReservationListContainer = () => {
  const fetchReservation = useFetchReservationsQuery({ page: 1, limit: 10, range: 10 });
  console.log(fetchReservation.data.list);

  return <ReservationList list={fetchReservation.data} />;
};

export default ReservationListContainer;
