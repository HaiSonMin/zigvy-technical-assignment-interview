import styled from 'styled-components';
import Heading from './Heading';
import Comment from './Comment';
import { IPost } from '@/interfaces/models';
import { UseUserApi } from '@/apis-use';

const PostCardStyled = styled.div``;
const Header = styled.div`
  .heading {
    text-align: center;
  }
  .info {
  }
`;
const Body = styled.div`
  margin: 1rem 0 2rem;
  .content {
    line-height: 1.4;
  }
`;

interface IProps {
  post: IPost | undefined;
}

export default function PostCard({ post }: IProps) {
  const { isGettingUser, metadata: user } = UseUserApi.getUser(post?.userId);

  return (
    <PostCardStyled>
      <Header>
        <Heading $as='h2' className='heading'>
          {post?.title}
        </Heading>
        <div className='info'>
          <p>Author:{isGettingUser ? 'UnKnow' : user?.name}</p>
          <p>Create at: {'Nov 08, 2023'}</p>
        </div>
      </Header>
      <Body>
        <p className='content'>{post?.body.slice(0, 100)}</p>
      </Body>
    </PostCardStyled>
  );
}
