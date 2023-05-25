import BarLoaderSpinner from '@/components/Spinners/BarLoaderSpinner';
import { useFetchKakaoVerifyQuery } from '@/features/auth/apis/authApi';
import { useEffect } from 'react';

function KakaoVerifyPage() {
  useFetchKakaoVerifyQuery();

  return <BarLoaderSpinner color="#6B77F8" />;
}

export default KakaoVerifyPage;
