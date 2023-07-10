import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from '@/constants/url';
import { storageUtil } from '@/utils/StorageUtil';
import tokenUtil from '../../../utils/TokenUtil';
import { UserModel } from '@/models/UserModel';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}/auth`,
    prepareHeaders: tokenUtil.addTokenToHeader,
    responseHandler: async response => {
      await tokenUtil.silentRefreshAccessToken(response.status);
      return response.text();
    },
  }),
  endpoints: builder => ({
    //네이버 인가코드
    fetchNaverVerify: builder.query<any, void>({
      query: () => {
        const codeParams = new URLSearchParams(window.location.search);
        const code = codeParams.get('code');
        return `/naver/verify?code=${code}`;
      },
      transformResponse: (response: any, meta, arg) => {
        const result = JSON.parse(response);
        const naverId = result.naver_id;

        // 네이버로 로그인을하고, z-one에 회원가입이 되어있지 않은경우
        if (naverId) {
          storageUtil.setOAuthProviderIds({ naverId: naverId });
          window.location.assign('/signUp');
        } else {
          // 네이버로 로그인을하고, z-one에 회원가입이 되어있는경우
          const { access_token, refresh_token } = result;
          storageUtil.setTokens({ accessToken: access_token, refreshToken: refresh_token });
          window.location.assign('/dashboard');
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
        return `/kakao/verify?code=${code}&redirect_uri=${encodeURIComponent(urls.redirectUri)}`;
      },
      transformResponse: (response: any, meta, arg) => {
        const result = JSON.parse(response);
        const kakaoId = result.kakao_id;

        // 카카오로 로그인을하고, z-one에 회원가입이 되어있지 않은경우
        if (kakaoId) {
          storageUtil.setOAuthProviderIds({ kakaoId: kakaoId });
          window.location.assign('/signUp');
        } else {
          // 카카오로 로그인을하고, z-one에 회원가입이 되어있는경우
          const { access_token, refresh_token } = result;
          storageUtil.setTokens({ accessToken: access_token, refreshToken: refresh_token });
          window.location.assign('/dashboard');
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
      transformResponse: (response: any, meta, arg) => {
        const { access_token, refresh_token } = JSON.parse(response);
        storageUtil.setTokens({ accessToken: access_token, refreshToken: refresh_token });
        window.location.assign('/dashboard');
      },
    }),
    // 회원가입
    setSignUp: builder.mutation({
      query: data => {
        const { naverId, kakaoId } = storageUtil.getOAuthProviderIds();
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
            gender: data.gender,
            grade: data.grade,
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
    // SMS인증을 위한 OTP 코드 전송
    fetchOtp: builder.mutation({
      query: data => {
        return {
          url: '/otp/send',
          method: 'POST',
          body: {
            phone: data,
          },
        };
      },
      transformErrorResponse: (response: any) => {
        const result = JSON.parse(response.data).message[0];
        alert(result);
      },
    }),
    // SMS인증을 위한 OTP 코드 전송
    fetchOtpVerify: builder.mutation({
      query: data => {
        return {
          url: '/otp/verify',
          method: 'POST',
          body: {
            phone: data.phone,
            code: data.code,
          },
        };
      },
      transformResponse: response => {
        alert('인증에 성공했습니다.');
      },
      transformErrorResponse: response => {
        alert('인증에 실패했습니다.');
      },
    }),
    // 유저 정보 가져오기
    fetchMe: builder.query<any, void>({
      query: () => '/me',
      transformResponse: (response: any) => {
        try {
          const user = new UserModel();
          const data = JSON.parse(response);
          return user.toJSON(data);
        } catch {}
      },
    }),
  }),
});

export const { useFetchOtpVerifyMutation, useFetchOtpMutation, useFetchNaverVerifyQuery, useFetchKakaoVerifyQuery, useSetSignUpMutation, useSignInMutation, useFetchMeQuery } = authApi;
