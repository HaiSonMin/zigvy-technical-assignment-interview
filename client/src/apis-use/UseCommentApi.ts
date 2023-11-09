import { CommentApi, PostApi } from '@/apis';
import { ICommentGetByPostIdResultApi } from '@/interfaces/result-apis/ICommentResultApi';
import { useQuery } from '@tanstack/react-query';

class UseCommentApi {
  static getCommentsByPost(
    postId: string | undefined
  ): ICommentGetByPostIdResultApi {
    const { data, isLoading } = useQuery({
      queryKey: ['comment', postId],
      queryFn: () => CommentApi.getCommentsByPost(postId),
    });

    return {
      isGettingComments: isLoading,
      metadata: data,
    };
  }
}

export default UseCommentApi;
