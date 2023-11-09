import { IComment } from '@/interfaces/models';

export interface ICommentGetByPostIdResultApi {
  isGettingComments: boolean;
  metadata: Array<IComment> | undefined;
}
