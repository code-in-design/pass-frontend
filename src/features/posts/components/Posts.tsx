import React, { useEffect } from 'react';
import { useGetPostsQuery } from '../postsApi';
import { postsLoading, postsReceived, postsFailed } from '../postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { PostModel } from '../../../app/models/PostModel';

export interface PostsProps {
  posts: PostModel[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
