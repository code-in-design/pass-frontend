import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { headers } from '../../app/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev-api.z-one.kr/',
    prepareHeaders: headers,
  }),

  endpoints: builder => ({
    //네이버 로그인
    // getNaver: builder.query<any, void>({
    //   query: () => 'auth/naver?redirect_uri=127.0.0.1:3000/signIn',
    // }),
    //네이버 인가코드
    getNaverVerify: builder.query<any, void>({
      query: () => {
        const codeParams = new URLSearchParams(window.location.search);
        const code = codeParams.get('code');
        return `auth/naver/verify?code=${code}`;
      },
    }),

    // 카카오톡 인가코드
    // getKakao: builder.query<any, string>({
    //   query: redirecstUri => `auth/kakao?redirect_uri=`,
    // }),

    // 카카오톡 인가코드
    getKakaoVerify: builder.query<any, void>({
      query: () => {
        const codeParams = new URLSearchParams(window.location.search);
        const code = codeParams.get('code');
        return `auth/kakao/verify?code=${code}&redirect_uri=http://localhost:3000/OAuth/kakao/kakaoVerifyPage`;
      },
    }),

    // 일반 로그인
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
    // 회원가입
    setSignUp: builder.mutation({
      query: data => {
        const naverId = window.localStorage.getItem('naverId');
        const kakaoId = window.localStorage.getItem('kakaoId');
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
            naver_id: naverId,
            kakao_id: kakaoId,
          },
        };
      },
    }),
    // 유저 정보 가져오기
    getMe: builder.query<any, void>({
      query: () => 'auth/me',
    }),
  }),
});

export const { useLazyGetNaverVerifyQuery, useLazyGetKakaoVerifyQuery, useSetSignUpMutation, useSetSignInMutation, useGetMeQuery } = authApi;
