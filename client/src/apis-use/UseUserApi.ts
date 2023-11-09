import { CommentApi, PostApi, UserApi } from '@/apis';
import { IUserGetOneResultApi } from '@/interfaces/result-apis/IUserResultApi';
import { useQuery } from '@tanstack/react-query';

class UseUserApi {
  static getUser(userId: string | undefined): IUserGetOneResultApi {
    const { data, isLoading } = useQuery({
      queryKey: ['user', userId],
      queryFn: () => UserApi.getUser(userId),
    });

    return {
      isGettingUser: isLoading,
      metadata: data,
    };
  }
}

export default UseUserApi;
