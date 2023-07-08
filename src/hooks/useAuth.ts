import axios, { AxiosHeaders } from 'axios';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { urls } from '../constants/url';
import { storageUtil } from '../utils/StorageUtil';
import tokenUtil from '../utils/TokenUtil';

const useAuth = () => {
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
      // 액세스토큰이 만료된 경우
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

  return { isLoading, isLogin, silentRefreshAccessToken };
};

export default useAuth;
