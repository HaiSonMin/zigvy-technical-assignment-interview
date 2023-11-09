import { IPost } from '@/interfaces/models';
import { IArgsQuery } from '@/interfaces/shared/IArgsQuery.interface';
import { http } from '@/utils';

class PostApi {
  async getPost(postId: string | undefined): Promise<IPost> {
    try {
      const response = await http.get(`/posts/${postId}`);
      const result: IPost = response.data;
      return result;
    } catch (error: any) {
      throw new Error('Some thing went wrong, pls try again');
    }
  }

  async searchPosts(
    fieldsQuery: Partial<IArgsQuery>,
    keySearch: string
  ): Promise<Array<IPost>> {
    try {
      const response = await http.get(`/posts`, {
        params: {
          _start: fieldsQuery.page,
          _limit: fieldsQuery.limit,
          title_like: keySearch,
        },
      });
      const result: Array<IPost> = response.data;
      return result;
    } catch (error: any) {
      throw new Error('Some thing went wrong, pls try again');
    }
  }
}

export default new PostApi();
