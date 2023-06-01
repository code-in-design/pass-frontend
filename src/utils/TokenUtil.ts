import axios, { AxiosHeaders } from 'axios';
import { storageUtil } from './StorageUtil';
import { urls } from '../constants/url';

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

  refreshAccessTokenByRefreshToken = async (refreshToken: string) => {
    try {
      const result = await axios({
        method: 'get',
        url: `${urls.baseUrl}/auth/token/${refreshToken}`,
      });
      const accessToken = result?.data?.access_token as string;
      return accessToken;
    } catch (e) {
      console.error(e);
    }
  };

  silentRefreshAccessToken = async response => {
    // 기존의 token이 어디에 저장되어있는지 찾기
    const { refreshToken } = storageUtil.getTokens();
    const isAccessTokenExpired = response.status === 401;
    const isExistRefreshToken = refreshToken !== null;

    // 엑세스 토큰 만료
    if (isAccessTokenExpired) {
      // 리프레시토큰이 있으면, 액세스토큰 재발급
      if (!isExistRefreshToken) {
        const accessToken = await this.refreshAccessTokenByRefreshToken(refreshToken!);
        storageUtil.setTokens({ accessToken, refreshToken: refreshToken! });
      }
      // 리프레시토큰이 없으면, 재로그인
      if (isExistRefreshToken) {
        window.location.assign('/signIn');
      }
    }

    // // 제대로 된 액세스토큰 다시 받아서 다시 저장하고
    // // 원래 호출 실패했던 API호출을 새로운 액세스토큰으로 재호출
    return response.text();
  };
}

const tokenUtil = new TokenUtil();
export default tokenUtil;
