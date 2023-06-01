import { urls } from '@/constants/url';
import axios, { AxiosHeaders } from 'axios';
import { isEmpty } from 'lodash';
import { useLayoutEffect, useState } from 'react';
import MainPage from '../src/pages/index';
import tokenUtil from '@/utils/TokenUtil';
import { storageUtil } from '@/utils/StorageUtil';
import CreateReservationContainer from '@/features/reservations/containers/CreateReservationContainer';

export default function Home({ isMobile }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const silentRefreshAccessToken = async () => {
    const { accessToken, refreshToken } = storageUtil.getTokens();
    if (!accessToken) {
      return setIsLoading(false);
    }

    const axiosHeaders = tokenUtil.addTokenToAxiosHeader(new AxiosHeaders());
    const client = axios.create({ headers: axiosHeaders });

    try {
      const result = await client.get(`${urls.baseUrl}/auth/me`);
      const userMe = result?.data;
      setIsLogin(!isEmpty(userMe));
    } catch (e: any) {
      const isAccessTokenExpired = e?.response?.status === 401;
      if (isAccessTokenExpired) {
        const newAccessToken = await tokenUtil.refreshAccessTokenByRefreshToken(refreshToken!);
        storageUtil.setTokens({ accessToken: newAccessToken, refreshToken: refreshToken! });
        if (newAccessToken) {
          setIsLogin(true);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    (async () => {
      await silentRefreshAccessToken();
    })();
  }, []);

  if (isLoading) return null;
  if (isLogin) return <MainPage />;
  return <CreateReservationContainer isMobile={isMobile} />;
}
