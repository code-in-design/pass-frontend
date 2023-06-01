import { urls } from '@/constants/url';
import { storageUtil } from '@/utils';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { useLayoutEffect, useState } from 'react';
import MainPage from '../src/pages/index';
import CreateReservationContainer from '@/features/reservations/containers/CreateReservationContainer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    const { accessToken, refreshToken } = storageUtil.getTokens();
    if (!accessToken) {
      return setIsLoading(false);
    }

    const client = axios.create({ headers: { Authorization: `Bearer ${accessToken}` } });
    client
      .get(`${urls.baseUrl}/auth/me`)
      .then(x => {
        setIsLogin(!isEmpty(x?.data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return null;
  if (isLogin) return <MainPage />;
  return <CreateReservationContainer />;
}
