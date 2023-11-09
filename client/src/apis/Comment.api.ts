import { IComment } from '@/interfaces/models';
import { http } from '@/utils';

class CommentApi {
  async getCommentsByPost(
    postId: string | undefined
  ): Promise<Array<IComment>> {
    try {
      const response = await http.get(`/comments`, {
        params: {
          postId: postId,
        },
      });
      const result: Array<IComment> = response.data;
      return result;
    } catch (error: any) {
      throw new Error('Some thing went wrong, pls try again');
    }
  }
}

export default new CommentApi();
