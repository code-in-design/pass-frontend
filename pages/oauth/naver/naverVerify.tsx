import { useFetchNaverVerifyQuery } from '@/features/auth/apis/authApi';
import BarLoaderSpinner from '@/components/Spinners/BarLoaderSpinner';
import { useEffect } from 'react';

export default function NaverVerifyPage() {
  useFetchNaverVerifyQuery();

  return <BarLoaderSpinner color="#6B77F8" />;
}
