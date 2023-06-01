import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from '@/constants/url';

export const reservationApi = createApi({
  reducerPath: 'reservation',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}`,
  }),
  endpoints: builder => ({
    // 연락처 리스트 조회
    fetchReservations: builder.query({
      query: ({ page, limit, range }) => {
        return `/reservations?page=${page}&limit=${limit}&range=${range}`;
      },
    }),

    // 연락처 등록
    setReservations: builder.mutation({
      query: data => {
        return {
          url: '/reservations',
          method: 'POST',
          body: {
            phone: data,
          },
        };
      },
      transformResponse: () => {
        alert('번호 등록이 완료되었습니다.');
      },
      transformErrorResponse: (res: any) => {
        if (res.data?.message) {
          alert(res.data?.message);
        }
      },
    }),
  }),
});

export const { useFetchReservationsQuery, useSetReservationsMutation } = reservationApi;
