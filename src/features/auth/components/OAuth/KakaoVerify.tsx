import React, { useEffect } from 'react';
import { useGetKakaoVerifyQuery, useLazyGetKakaoVerifyQuery } from '../../authApi';
import { useRouter } from 'next/router';

function KakaoVerify() {
  const { data, isFetching, isError, isSuccess } = useGetKakaoVerifyQuery();
  const router = useRouter();

  const fetchData = async () => {
    if (isSuccess) {
      console.log(data);
      const kakaoId = data.kakao_id;
      if (!kakaoId) {
        window.localStorage.setItem('accessToken', data.access_token);
        window.localStorage.setItem('refreshToken', data.refresh_token);
        router.push('/');
      }
      // 카카오 로그인이후, 가입한적이 없을경우 response로 kakaoid를 받아 회원가입을한다.
      if (kakaoId) {
        window.localStorage.setItem('kakaoId', kakaoId);
        router.push('/signUp');
      }
    }
    if (isError) {
      console.log(data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return <></>;
}

export default KakaoVerify;
