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
            console.log(333, window.location);
            window.location.assign('/signIn');
          }
        });
      // const accessToken = result?.data?.access_token as string;
      // console.log(accessToken);
      return accessToken;
    } catch (e) {
      console.error(e);
    }
  };

  // 리프레시토큰으로 액세스토큰 조용히 재발급
  silentRefreshAccessToken = async response => {
    // 기존의 token이 어디에 저장되어있는지 찾기
    const { refreshToken } = storageUtil.getTokens();
    const isAccessTokenExpired = response.status === 401;
    const isExistRefreshToken = refreshToken !== null;

    // 엑세스 토큰 만료
    if (isAccessTokenExpired) {
      // 리프레시토큰이 있으면, 액세스토큰 재발급
      if (isExistRefreshToken) {
        const accessToken = await this.refreshAccessTokenByRefreshToken(refreshToken!);
        storageUtil.setTokens({ accessToken, refreshToken: refreshToken! });
      }
      // 리프레시토큰이 없으면, 재로그인
      if (!isExistRefreshToken) {
        // 랜딩페이지에서는 로그인이 필요없으므로 로그인창으로 이동하지 않도록 return 처리
        if (window.location.pathname === '/') return;
        // 다른페이지에서는 로그인 실패시 로그인창으로 이동
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
