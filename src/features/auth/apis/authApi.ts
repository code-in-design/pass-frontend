import { AppDispatch } from './../../../app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader } from '../../../app/api';
import { devBaseUrl } from '@/constants/url';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${devBaseUrl}/auth`,
    prepareHeaders: addTokenToHeader,
  }),

  endpoints: builder => ({
    //새로운 accessToken 발급받기
    issuedToken: builder.query<any, void>({
      query: () => {
        const refreshToken = window.localStorage.getItem('refreshToken');
        return {
          url: `/token/${refreshToken}`,
        };
      },
    }),
    //네이버 인가코드
    fetchNaverVerify: builder.query<any, void>({
      query: () => {
        const codeParams = new URLSearchParams(window.location.search);
        const code = codeParams.get('code');
        return `/naver/verify?code=${code}`;
      },
      transformResponse: (response: any, meta, arg) => {
        const naverId = response.naver_id;
        // 네이버로 로그인을하고, z-one에 회원가입이 되어있는경우
        if (!naverId) {
          window.localStorage.setItem('accessToken', response.access_token);
          window.localStorage.setItem('refreshToken', response.refresh_token);
          window.location.assign('/');
        }
        // 네이버로 로그인을하고, z-one에 회원가입이 되어있지 않은경우
        if (naverId) {
          window.localStorage.setItem('naverId', naverId);
          window.location.assign('/signUp');
        }
      },
      transformErrorResponse: response => {
        if (response.status === 400) {
          window.location.assign('/signIn');
        }
      },
    }),
    // 카카오톡 인가코드
    fetchKakaoVerify: builder.query<any, void>({
      query: () => {
        const codeParams = new URLSearchParams(window.location.search);
        const code = codeParams.get('code');
        return `/kakao/verify?code=${code}`;
      },
      transformResponse: (response: any, meta, arg) => {
        const kakaoId = response.kakao_id;
        // 카카오로 로그인을하고, z-one에 회원가입이 되어있는경우
        if (!kakaoId) {
          window.localStorage.setItem('accessToken', response.access_token);
          window.localStorage.setItem('refreshToken', response.refresh_token);
          window.location.assign('/');
        }
        // 카카오로 로그인을하고, z-one에 회원가입이 되어있지 않은경우
        if (kakaoId) {
          window.localStorage.setItem('naverId', kakaoId);
          window.location.assign('/signUp');
        }
      },
      transformErrorResponse: response => {
        if (response.status === 400) {
          window.location.assign('/signIn');
        }
      },
    }),
    // 일반 로그인
    signIn: builder.mutation({
      query: data => {
        return {
          url: `/email`,
          method: 'POST',
          body: {
            email: data.email,
            password: data.password,
          },
        };
      },
      // transformResponse: (response: any, meta, arg) => {
      //   console.log(response);
      //   window.localStorage.setItem('accessToken', response.access_token);
      //   window.localStorage.setItem('refreshToken', response.refresh_token);
      // },
      // transformErrorResponse: response => {
      //   console.log(response);
      // },
    }),
    // 회원가입
    setSignUp: builder.mutation({
      query: data => {
        const naverId = window.localStorage.getItem('naverId');
        const kakaoId = window.localStorage.getItem('kakaoId');
        return {
          url: `/signup`,
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
    fetchMe: builder.query<any, void>({
      query: () => '/me',
    }),
  }),
});

export const { useIssuedTokenQuery, useFetchNaverVerifyQuery, useFetchKakaoVerifyQuery, useSetSignUpMutation, useSignInMutation, useFetchMeQuery } = authApi;
