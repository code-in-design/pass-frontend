import React, { useEffect } from 'react';
import { useLazyGetKakaoVerifyQuery } from '../../authApi';
import { useRouter } from 'next/router';

function KakaoVerify() {
  const [kakaoVerify, IdOrToken] = useLazyGetKakaoVerifyQuery();
  const router = useRouter();

  useEffect(() => {
    const payload = kakaoVerify().unwrap();
    payload
      .then(data => {
        const kakaoId = data.kakao_id;
        // 카카오로 로그인 이후, 가입한적이 있을경우
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
      })
      .catch(err => {
        if (err.status === 400) {
          router.push('/signIn');
        }
        console.log('error', err);
      });
  }, []);
  return <></>;
}

export default KakaoVerify;
