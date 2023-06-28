import { urls } from '@/constants/url';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader, fetchAccessToken } from '@/app/api';

export const universityApi = createApi({
  reducerPath: 'universityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}`,
    prepareHeaders: addTokenToHeader,
    responseHandler: fetchAccessToken,
  }),

  endpoints: builder => ({
    //대학 리스트 조회
    fetchUniversityList: builder.query({
      query: () => '/university',
    }),
  }),
});
