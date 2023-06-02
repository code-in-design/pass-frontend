import { useFetchReservationsQuery } from '../apis/reservationApi';
import ReservationList from '../components/ReservationList';
import dayjs from 'dayjs';

const ReservationListContainer = () => {
  const { data } = useFetchReservationsQuery({ page: 1, limit: 10, range: 10 });
  const newList: any = [];

  if (data) {
    const lists = data.result;
    lists.map(list => {
      const date = dayjs(list.updated_at).format('YYYY-MM-DD hh:MM a');
      newList.push({ ID: list.id, 핸드폰번호: list.phone, 등록날짜: date });
      return newList;
    });
  }
  return <ReservationList rowData={newList} />;
};

export default ReservationListContainer;
