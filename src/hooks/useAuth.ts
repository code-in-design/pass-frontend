import axios, { AxiosHeaders } from 'axios';
import { isEmpty, isNil, omitBy } from 'lodash';
import React, { useMemo, useState } from 'react';
import { urls } from '../constants/url';
import { storageUtil } from '../utils/StorageUtil';
import tokenUtil from '../utils/TokenUtil';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userMe, setUserMe] = useState();
  const isLogin = useMemo(() => !isEmpty(omitBy(userMe, isNil)), [userMe]);

  const fetchUserMe = async () => {
    const { accessToken, refreshToken } = storageUtil.getTokens();
    if (!accessToken) {
      return setIsLoading(false);
    }

    const axiosHeaders = tokenUtil.addTokenToAxiosHeader(new AxiosHeaders());
    const client = axios.create({ headers: axiosHeaders });

    try {
      const result = await client.get(`${urls.baseUrl}/auth/me`);
      setUserMe(result?.data);
    } catch (e: any) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isLogin, userMe, fetchUserMe };
};

export default useAuth;
