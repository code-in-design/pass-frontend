import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PostModel } from '../../app/models/PostModel';

interface PostsState {
  posts: PostModel[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsLoading: state => {
      state.status = 'loading';
    },
    postsReceived: (state, action: PayloadAction<PostModel[]>) => {
      state.posts = action.payload;
      state.status = 'succeeded';
    },
    postsFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const selectPosts = createSelector(
  (state: RootState) => state.posts,
  posts => posts,
);

export const { postsLoading, postsReceived, postsFailed } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
