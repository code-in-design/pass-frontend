import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-api.z-one.kr/' }),
  endpoints: builder => ({
    getNaver: builder.query<any, void>({
      query: () => 'auth/naver',
    }),
    getKakao: builder.query<any, void>({
      query: () => 'auth/kakao',
    }),

    setSignUp: builder.mutation({
      query: ({ value }) => {
        return {
          url: `auth/signup`,
          method: 'POST',
          body: { value },
        };
      },
    }),
    setSignIn: builder.mutation({
      query: data => {
        return {
          url: `auth/signup`,
          method: 'POST',
          body: {
            type: data.type,
            name: data.name,
            phone: data.phone,
            email: data.email,
            zonecode: data.zonecode,
            address: data.address,
            gender: data.gender,
            grade: data.grade,
            password: data.password,
            agree_flag_14_age: data.agree[0],
            agree_flag_terms: data.agree[1],
            agree_flag_privacy: data.agree[2],
            agree_flag_marketing: data.agree[3],
            agree_flag_event: data.agree[4],
            referral_code: data.referral_code,
            naver_id: data.naver_id,
            kakao_id: data.kakao_id,
          },
        };
      },
    }),
  }),
});

export const { useLazyGetNaverQuery, useLazyGetKakaoQuery, useSetSignInMutation } = authApi;
