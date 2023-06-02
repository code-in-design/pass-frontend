import { useCallback, useState } from 'react';
import { useFetchReservationsQuery } from '../apis/reservationApi';
import ReservationList from '../components/ReservationList';
import dayjs from 'dayjs';

const ReservationListContainer = () => {
  const [page, setPage] = useState(1);
  const limit = 30;
  const { data } = useFetchReservationsQuery({ page: page, limit: limit, range: 10 });
  const newList: any = [];

  const nextPageChange = () => {
    setPage(prev => prev - 1);
  };
  const prevPageChange = () => {
    setPage(prev => prev + 1);
  };

  if (data) {
    const lists = data.result;
    lists.map(list => {
      const date = dayjs(list.updated_at).format('YYYY-MM-DD hh:MM a');
      newList.push({ ID: list.id, 핸드폰번호: list.phone, 등록날짜: date });
      return newList;
    });
  }
  return <ReservationList rowData={newList} limit={limit} nextPageChange={nextPageChange} prevPageChange={prevPageChange} />;
};

export default ReservationListContainer;
