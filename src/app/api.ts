import { devBaseUrl } from '@/constants/url';
import { storageUtil } from '@/utils';
import axios from 'axios';
import { cond } from 'lodash';

// 헤더에 token추가하고 관리
export const addTokenToHeader = (headers, { getState }) => {
  const isAutoLogin = storageUtil.getItemFromLocalStorage('autoLogin');
  let token;
  if (Boolean(isAutoLogin)) {
    token = storageUtil.getItemFromLocalStorage('accessToken');
  } else {
    token = storageUtil.getItemFromSessionStorage('accessToken');
  }

  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};

export const fetchAccessToken = async response => {
  // 기존의 token이 어디에 저장되어있는지 찾기
  const { refreshToken } = storageUtil.getTokens();
  // 액세스 토큰이 없거나 만료됬거나 유효하지 않은 경우
  if (response.status === 401) {
    if (refreshToken !== null) {
      // 새로운 엑세스토큰가져오기
      axios({
        method: 'get',
        url: `${devBaseUrl}/auth/token/${refreshToken}`,
      })
        .then(res => {
          storageUtil.setTokens(res.data.access_token);
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (refreshToken === null) {
      //다시 로그인하기
      window.location.assign('/signIn');
    }
  }
  // // 제대로 된 액세스토큰 다시 받아서 다시 저장하고
  // // 원래 호출 실패했던 API호출을 새로운 액세스토큰으로 재호출
  return response.text();
};
