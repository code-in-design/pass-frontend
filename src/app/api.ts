// 헤더에 token추가하고 관리
export const addTokenToHeader = (headers, { getState }) => {
  const token = window.localStorage.getItem('accessToken');
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};
