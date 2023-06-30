import { urls } from '@/constants/url';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import tokenUtil from '@/utils/TokenUtil';
import { UniversitiesModel } from '@/models/UniversitiesModel';
import { UniversityDepartmentsModel } from '@/models/UniversityDepartmentsModel';

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

          const universityData = data.result.map((item: any) => universityModel.setModelFromData(item));
          return universityData;
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const { useFetchUniversityListQuery } = universityApi;
