import { getLocalStorage, getSessionStorage } from '@/utils';

// 헤더에 token추가하고 관리
export const addTokenToHeader = (headers, { getState }) => {
  const isAutoLogin = getLocalStorage('autoLogin');
  let token;
  if (Boolean(isAutoLogin)) {
    token = getLocalStorage('accessToken');
  } else {
    token = getSessionStorage('accessToken');
  }

  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};
