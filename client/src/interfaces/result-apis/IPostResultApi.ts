import { IPost } from '@/interfaces/models/IPost.interface';

export interface IPostGetResultApi {
  isGettingPost: boolean;
  metadata: IPost | undefined;
}

export interface IPostGetAllResultApi {
  isGettingPosts: boolean;
  metadata: Array<IPost> | undefined;
}
