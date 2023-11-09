import { skipPage } from '../utils';
import { commentModel } from '../models';

export default class CommentRepository {
  static async getComment(commentId: string) {
    return await commentModel.findById(commentId).lean().exec();
  }
  static async getAllComments(limit: number, page: number) {
    return await commentModel
      .find()
      .limit(limit)
      .skip(skipPage({ limit, page }))
      .lean()
      .exec();
  }

  static async updateComment(commentId: string, payload: any) {
    return await commentModel
      .findByIdAndUpdate(commentId, payload, { new: true })
      .lean()
      .exec();
  }
  static async deleteComment(commentId: string) {
    return await commentModel.findByIdAndDelete(commentId).lean().exec();
  }
}
