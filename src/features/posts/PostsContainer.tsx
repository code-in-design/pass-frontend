import React, { useEffect } from 'react';
import { Posts } from './components/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { postsFailed, postsLoading, postsReceived, selectPosts } from './postsSlice';
import { useGetPostsQuery } from './postsApi';

{
  /* 
    Container 컴포넌트는 아래와 같은 역할을 해야함
      1. 데이터 fetch
      2. 상태에 따른 UI 분기 처리
      3. redux store에서 state를 구독
      4. redux store에 action을 dispatch
  */
}
const PostsContainer = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(selectPosts);
  const { data, error, isLoading } = useGetPostsQuery();

  useEffect(() => {
    if (data) {
      dispatch(postsReceived(data));
    } else if (error) {
      dispatch(postsFailed(error.toString()));
    } else {
      dispatch(postsLoading());
    }
  }, [data, error, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {String(error)}</div>;
  }

  {
    /*
      Dumb Component는 아래와 같은 역할을 해야함. (Posts)
        1. UI 관련된 코드만 작성되어야함
        2. 코드가 단순하고 간결해야함
        3. 다른 프로젝트에서도 재활용할 수 있을 정도로 프로젝트에 종속성이 없어야함.
        4. Container컴포넌트에서 전달된 Props에 의해서만 제어되어야함
        5. 최대한 Dumb Component를 직접 렌더링하기보다는 Container Component로 한번 wrapping해서 렌더링하는게 좋음
    */
  }
  return <Posts posts={postsState.posts} />;
};

export default PostsContainer;
