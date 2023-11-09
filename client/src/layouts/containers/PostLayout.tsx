import { PostCard } from '@/components';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getQueriesString, randomKey } from '@/utils';
import { useQueriesString } from '@/hooks';
import { UsePostApi } from '@/apis-use';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  getPagePosts,
  getPosts,
  getSearchPosts,
  setNextPage,
} from '@/slices/postSlice';
import { IPost } from '@/interfaces/models';
import { FaEye } from 'react-icons/fa';
import { PATH_CONSTANT } from '@/constants';

const PostLayoutStyled = styled.div`
  margin-top: 2rem;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostItem = styled.div`
  position: relative;
  padding: 2rem 4rem;
  border: 1px solid var(--color-grey-400);
  border-radius: 1rem;

  .see-detail {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    transition: all 0.3s;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    &:hover {
      scale: 1.1;
    }
  }
`;

const MAX_POST = 100;
const LIMIT = 10;

export default function PostLayout() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const keySearchPosts = useSelector(getSearchPosts);
  const currentPage = useSelector(getPagePosts);
  const { isGettingPosts, metadata } = UsePostApi.searchPosts(
    keySearchPosts,
    currentPage
  );

  useEffect(() => {
    const newPosts: IPost[] = metadata || [];
    if (!isGettingPosts && metadata?.length) dispatch(addPost(newPosts));
  }, [isGettingPosts, currentPage, keySearchPosts]);

  const fetchData = () => {
    if (currentPage < MAX_POST / LIMIT) dispatch(setNextPage());
  };

  return (
    <PostLayoutStyled>
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={fetchData}
        hasMore={posts.length >= 10 && posts.length <= MAX_POST}
        loader={!!metadata && metadata.length >= 10 && <div>Loading...</div>}
        scrollThreshold={'100%'}
      >
        <PostContainer>
          {posts.map((post) => (
            <PostItem key={randomKey()}>
              <Link to={`/${PATH_CONSTANT.postDetail}/${post?.id}`}>
                <FaEye className='see-detail' />
              </Link>
              <PostCard post={post} />
            </PostItem>
          ))}
        </PostContainer>
      </InfiniteScroll>
    </PostLayoutStyled>
  );
}
