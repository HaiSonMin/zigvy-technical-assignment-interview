import styled from 'styled-components';
import { Comment, PostCard } from '@/components';
import { UseCommentApi, UsePostApi } from '@/apis-use';
import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const PostDetailPageLayoutStyled = styled.div`
  margin-top: 2rem;
  padding: 2rem 4rem;
  border: 1px solid var(--color-grey-400);
  border-radius: 1rem;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .extend {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const BoxComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function PostDetailPageLayout() {
  const [isCollapseComment, setIsCollapseComment] = useState<boolean>(false);
  const { isGettingPost, metadata: post } = UsePostApi.getPost();
  const { isGettingComments, metadata: comments } =
    UseCommentApi.getCommentsByPost(post?.id);

  console.log('comments:::', comments);
  const handleExtendComment = () => setIsCollapseComment(true);

  if (isGettingPost || isGettingComments) return <div>Loading....</div>;

  return (
    <PostDetailPageLayoutStyled>
      <PostCard post={post} />
      <Comments>
        {!isCollapseComment ? (
          <p className='extend' onClick={handleExtendComment}>
            <BsArrowRightShort />
            See detail {comments?.length} comments
          </p>
        ) : (
          <BoxComments>
            {comments?.map((comment) => (
              <Comment comment={comment} key={comment.id}/>
            ))}
          </BoxComments>
        )}
      </Comments>
    </PostDetailPageLayoutStyled>
  );
}
