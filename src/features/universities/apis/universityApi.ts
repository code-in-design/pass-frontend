import { urls } from '@/constants/url';
import queryString from 'query-string';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import tokenUtil from '@/utils/TokenUtil';
import { UniversitiesModel } from '@/models/UniversitiesModel';
import { UniversityFilterModel } from '@/models/UniversityFilterModel';

const universityModel = new UniversitiesModel();
const universityFilterModel = new UniversityFilterModel();

export const universityApi = createApi({
  reducerPath: 'universityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}/university`,
    prepareHeaders: tokenUtil.addTokenToHeader,
    responseHandler: async response => {
      await tokenUtil.silentRefreshAccessToken(response.status);
      return response.text();
    },
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
            universityModel.setModelFromData(item);
            return universityModel.toJSON();
          });
          return universityData;
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
        const changeQuery = universityFilterModel.toServer(queryString.parse(currentQuery));
        return `/count${currentQuery}`;
      },
    }),
  }),
});

export const { useFetchUniversityListQuery, useFetchUniversityDetailQuery, useLazyFetchUniversityDetailQuery, useFetchUniversityCountQuery, useLazyFetchUniversityCountQuery } = universityApi;
