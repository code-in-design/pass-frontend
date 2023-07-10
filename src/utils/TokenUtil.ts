import axios, { AxiosHeaders } from 'axios';
import { storageUtil } from './StorageUtil';
import { urls } from '../constants/url';
import { SERVICE_PATH } from '../constants/path';

class TokenUtil {
  addTokenToHeader = (headers: Headers) => {
    const { accessToken, refreshToken } = storageUtil.getTokens();
    if (accessToken) {
      headers?.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  };

  addTokenToAxiosHeader = (axiosHeaders: AxiosHeaders) => {
    const { accessToken, refreshToken } = storageUtil.getTokens();
    if (accessToken) {
      axiosHeaders?.setAuthorization(`Bearer ${accessToken}`);
    }
    return axiosHeaders;
  };

  // 리프레스토큰으로 액세스토큰 재발급
  refreshAccessTokenByRefreshToken = async (refreshToken: string) => {
    let accessToken;
    try {
      const result = await axios({
        method: 'get',
        url: `${urls.baseUrl}/auth/token/${refreshToken}`,
      })
        .then(e => {
          if (e.status === 200) {
            accessToken = e.data.access_token as string;
            return accessToken;
          }
        })
        .catch(e => {
          if (e.response.status === 400) {
            const pathname = window.location.pathname;
            if (pathname === SERVICE_PATH.LANDING || pathname === SERVICE_PATH.SIGNIN) return;
            window.location.assign(SERVICE_PATH.SIGNIN);
          }
        });
      return accessToken;
    } catch (e) {
      console.error(e);
    }
  };

  // 액세스토큰 조용히 재발급
  silentRefreshAccessToken = async (status: number) => {
    // 기존의 token이 어디에 저장되어있는지 찾기
    const { refreshToken } = storageUtil.getTokens();
    const isAccessTokenExpired = status === 401;
    const isExistRefreshToken = refreshToken !== null;

    // 엑세스 토큰 만료
    if (isAccessTokenExpired) {
      // 리프레시토큰이 있으면, 액세스토큰 재발급
      if (isExistRefreshToken) {
        const newAccessToken = await this.refreshAccessTokenByRefreshToken(refreshToken!);
        storageUtil.setTokens({ accessToken: newAccessToken, refreshToken: refreshToken! });
        return newAccessToken;
      }
      // 리프레시토큰이 없으면, 재로그인
      if (!isExistRefreshToken) {
        // 랜딩페이지에서는 로그인이 필요없으므로 로그인창으로 이동하지 않도록 return 처리
        if (window.location.pathname === SERVICE_PATH.LANDING) return;
        // 다른페이지에서는 로그인 실패시 로그인창으로 이동
        window.location.assign(SERVICE_PATH.SIGNIN);
      }
    }

    return null;
  };
}

const tokenUtil = new TokenUtil();
export default tokenUtil;
