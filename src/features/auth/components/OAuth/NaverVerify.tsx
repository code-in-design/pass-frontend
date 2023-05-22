import React, { useEffect } from 'react';
import { useLazyGetNaverVerifyQuery } from '../../authApi';
import { useRouter } from 'next/router';

function NaverVerify() {
  const [naverVerify, IdOrToken] = useLazyGetNaverVerifyQuery();
  const router = useRouter();

  useEffect(() => {
    const payload = naverVerify().unwrap();
    payload
      .then(data => {
        const naverId = data.naver_id;
        // 네이버로 로그인 이후, 가입한적이 있을경우
        if (!naverId) {
          window.localStorage.setItem('accessToken', data.access_token);
          window.localStorage.setItem('refreshToken', data.refresh_token);
          router.push('/');
        }
        // 네이버로 로그인이후, 가입한적이 없을경우 response로 naverid를 받아 회원가입을한다.
        if (naverId) {
          window.localStorage.setItem('naverId', naverId);
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

export default NaverVerify;
