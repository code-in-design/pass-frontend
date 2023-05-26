class StorageUtil {
  accessTokenKey = 'accessToken';
  refreshTokenKey = 'refreshToken';
  naverIdKey = 'naverId';
  kakaoIdKey = 'kakaoId';
  autoLoginKey = 'autoLogin';

  getItemFromSessionStorage = (name: any) => {
    try {
      return window.sessionStorage.getItem(name);
    } catch (e) {
      console.error(`[Error: getItemFromSessionStorage] ${e}`);
      return null;
    }
  };

  getItemFromLocalStorage = (name: any) => {
    try {
      return window.localStorage.getItem(name);
    } catch (e) {
      console.error(`[Error: getItemFromLocalStorage] ${e}`);
      return null;
    }
  };

  setItemToSessionStorage = (name: any, item) => {
    try {
      return window.sessionStorage.setItem(name, item);
    } catch (e) {
      console.error(`[Error: setItemToSessionStorage] ${e}`);
      return null;
    }
  };

  setItemToLocalStorage = (name: any, item) => {
    try {
      return window.localStorage.setItem(name, item);
    } catch (e) {
      console.error(`[Error: setItemToLocalStorage] ${e}`);
      return null;
    }
  };

  // 자동로그인 여부에 따라 토큰을 세션스토리지 또는 로컬스토리지에 저장함
  setTokens = ({ accessToken, refreshToken }: { accessToken?: string; refreshToken?: string }) => {
    const isAutoLogin = this.getItemFromLocalStorage(this.autoLoginKey);

    if (isAutoLogin) {
      this.setItemToLocalStorage(this.accessTokenKey, accessToken);
      this.setItemToLocalStorage(this.refreshTokenKey, refreshToken);
    }

    if (!isAutoLogin) {
      this.setItemToSessionStorage(this.accessTokenKey, accessToken);
      this.setItemToSessionStorage(this.refreshTokenKey, refreshToken);
    }
  };

  // 세션스토리지 또는 로컬스토리지에 있는 액세스토큰과 리프레시토큰을 리턴함
  getTokens = () => {
    const accessToken = this.getItemFromSessionStorage(this.accessTokenKey) || this.getItemFromLocalStorage(this.accessTokenKey);
    const refreshToken = this.getItemFromSessionStorage(this.refreshTokenKey) || this.getItemFromLocalStorage(this.refreshTokenKey);
    return { accessToken, refreshToken };
  };

  getOAuthProviderIds = () => {
    const naverId = this.getItemFromSessionStorage(this.naverIdKey) || this.getItemFromSessionStorage(this.naverIdKey);
    const kakaoId = this.getItemFromSessionStorage(this.kakaoIdKey) || this.getItemFromSessionStorage(this.kakaoIdKey);
    return { naverId, kakaoId };
  };
}

export const storageUtil = new StorageUtil();
