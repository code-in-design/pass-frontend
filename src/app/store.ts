import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonsApi } from '../features/pokemons/pokemonsApi';
import { postsReducer } from '../features/posts/postsSlice';
import { postsApi } from '../features/posts/postsApi';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // 특정 top-level slice에서 생성된 리듀서를 추가
    [postsApi.reducerPath]: postsApi.reducer,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  // 캐싱, 요청 취소, 폴링 등등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware).concat(pokemonsApi.middleware),
});

// 옵셔널, refetchOnFocus/refetchOnReconnect 기능을 위해 필요함
// setupListeners 문서를 참고 - 커스텀을 위한 옵셔널 콜백을 2번째 인자로 받음
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
