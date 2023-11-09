import { IComment, IUser } from '@/interfaces/models';
import { IArgsQuery } from '@/interfaces/shared/IArgsQuery.interface';
import { http } from '@/utils';

class UserApi {
  async getUser(userId: string | undefined): Promise<IUser> {
    try {
      const response = await http.get(`/users/${userId}`);
      const result: IUser = response.data;
      return result;
    } catch (error: any) {
      throw new Error('Some thing went wrong, pls try again');
    }
  }
}

export default new UserApi();
