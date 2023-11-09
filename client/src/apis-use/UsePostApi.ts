import { PostApi } from '@/apis';
import {
  IPostGetAllResultApi,
  IPostGetResultApi,
} from '@/interfaces/result-apis/IPostResultApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

class UsePostApi {
  static getPost(): IPostGetResultApi {
    const { postId } = useParams();
    const { data, isLoading } = useQuery({
      queryKey: ['post', postId],
      queryFn: () => PostApi.getPost(postId),
    });

    return {
      isGettingPost: isLoading,
      metadata: data,
    };
  }

  static searchPosts(keySearch: string, page: number): IPostGetAllResultApi {
    const { data, isLoading } = useQuery({
      queryKey: ['posts', keySearch, page],
      queryFn: () =>
        PostApi.searchPosts(
          {
            limit: 10,
            page,
          },
          keySearch
        ),
    });

    return {
      isGettingPosts: isLoading,
      metadata: data,
    };
  }
}

export default UsePostApi;
