import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostModel } from '../../app/models/PostModel';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getPosts: builder.query<PostModel[], void>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
