import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { IComment } from '@/interfaces/models';
import dayjs from 'dayjs';

const CommentStyled = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-text);
`;

const CommentLogo = styled.div`
  svg {
    color: var(--color-primary);
    width: 3rem;
    height: 3rem;
  }
`;

const CommentInfo = styled.div`
  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .useremail {
      font-size: 1.4rem;
    }

    .time {
      font-size: 1.2rem;
      color: var(--color-grey-400);
    }
  }

  .content {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 1rem;
  }

  .reply {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

interface IProps {
  comment: IComment;
}
export default function Comment({ comment }: IProps) {
  return (
    <CommentStyled>
      <CommentLogo>
        <FaUserCircle />
      </CommentLogo>
      <CommentInfo>
        <div className='info'>
          <p className='useremail'>{comment.email}</p>
          <p className='time'>{dayjs(Date.now()).format('DD/MM/YYYY')}</p>
        </div>
        <div className='content'>{comment.body}</div>
        <p className='reply'>Reply to</p>
      </CommentInfo>
    </CommentStyled>
  );
}
