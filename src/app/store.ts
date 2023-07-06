import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '@/features/auth/apis/authApi';
import { scoresApi } from '@/features/myScore/apis/scoresApi';
import { reservationApi } from '@/features/reservations/apis/reservationApi';
import { scoresReducer, scoresSlice } from './../features/myScore/slices/scoresSlice';
import { universityApi } from '@/features/universities/apis/universityApi';
import { universityReducer, universitySlice } from '@/features/universities/slices/universitySlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [scoresApi.reducerPath]: scoresApi.reducer,
    [scoresSlice.name]: scoresReducer,
    [universityApi.reducerPath]: universityApi.reducer,
    [universitySlice.name]: universityReducer,
  },
  // 캐싱, 요청 취소, 폴링 등등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware).concat(scoresApi.middleware).concat(reservationApi.middleware).concat(universityApi.middleware),
});

// 옵셔널, refetchOnFocus/refetchOnReconnect 기능을 위해 필요함
// setupListeners 문서를 참고 - 커스텀을 위한 옵셔널 콜백을 2번째 인자로 받음
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
