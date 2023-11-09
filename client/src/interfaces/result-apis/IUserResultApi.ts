import { IUser } from '@/interfaces/models';

export interface IUserGetOneResultApi {
  isGettingUser: boolean;
  metadata: IUser | undefined;
}
