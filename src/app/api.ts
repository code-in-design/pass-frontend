import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Router from 'next/router';

// 새로운 Access token 발급받기
export const newAccessToken = createApi({
  reducerPath: 'newAccessTokenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev-api.z-one.kr/',
  }),
  endpoints: builder => ({
    getIssuedToken: builder.query<any, void>({
      query: () => {
        const refreshToken = window.localStorage.getItem('refreshToken');
        return {
          url: `auth/token/${refreshToken}`,
        };
      },
    }),
  }),
});
export const { useGetIssuedTokenQuery } = newAccessToken;

// 헤더에 token추가하고 관리
export const headers = (headers, { getState }) => {
  const token = window.localStorage.getItem('accessToken');

  // If we have a token set in state, let's assume that we should be passing it.
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};
