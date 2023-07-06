class Urls {
  baseUrl = 'https://dev-api.z-one.kr';
  authKakao = '/auth/kakao';
  authNaver = '/auth/naver';
  redirectUri = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/oauth/kakao/kakaoVerify' : 'https://z-one.kr/signIn';
}

export const urls = new Urls();
