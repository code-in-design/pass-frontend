import { urls } from '@/constants/url';
import queryString from 'query-string';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import tokenUtil from '@/utils/TokenUtil';
import { UniversitiesModel } from '@/models/UniversitiesModel';

const universityModel = new UniversitiesModel();

export const universityApi = createApi({
  reducerPath: 'universityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}/university`,
    prepareHeaders: tokenUtil.addTokenToHeader,
    responseHandler: tokenUtil.silentRefreshAccessToken,
  }),

  endpoints: builder => ({
    //대학 리스트 조회
    fetchUniversityList: builder.query<any, void>({
      query: () => {
        return `/?page=${1}&limit=${20}&range=${10}`;
      },
      transformResponse: (res: any) => {
        try {
          const data = JSON.parse(res);
          const universityData = data?.result?.map((item: any) => {
            return universityModel.setModelFromData(item);
          });
          return universityModel.toJSON(universityData);
        } catch (e) {
          console.error(e);
        }
      },
    }),

    // 대학 상세 조회
    fetchUniversityDetail: builder.query({
      query: (id: number) => {
        return `/${id}`;
      },
    }),

    // 대학 리스트 조회 개수
    fetchUniversityCount: builder.query<any, void>({
      query: () => {
        const currentQuery = window.location.search;
        return `/count?${currentQuery}`;
      },
    }),
  }),
});

export const { useFetchUniversityListQuery, useFetchUniversityDetailQuery, useFetchUniversityCountQuery, useLazyFetchUniversityCountQuery } = universityApi;
