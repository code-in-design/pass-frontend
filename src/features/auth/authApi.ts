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

    setSignIn: builder.mutation({
      query: data => {
        return {
          url: `auth/email`,
          method: 'POST',
          body: {
            email: data.email,
            password: data.password,
          },
        };
      },
    }),
    setSignUp: builder.mutation({
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
            gender: data.gender.value,
            grade: data.grade.value,
            password: data.password,
            agree_flag_14_age: data.agree_flag_14_age,
            agree_flag_terms: data.agree_flag_terms,
            agree_flag_privacy: data.agree_flag_privacy,
            agree_flag_marketing: data.agree_flag_marketing,
            agree_flag_event: data.agree_flag_event,
            referral_code: data.referral_code,
            naver_id: data.naver_id,
            kakao_id: data.kakao_id,
          },
        };
      },
    }),
  }),
});

export const { useLazyGetNaverQuery, useLazyGetKakaoQuery, useSetSignUpMutation, useSetSignInMutation } = authApi;
