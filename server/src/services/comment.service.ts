import { commentModel } from '../models';
import { Request, Response } from 'express';
import { CommentRepository } from '../repositories';
import { BadRequestError, NotFoundError } from '../core/error.response';
import { IComment } from 'src/interface/model';
import { IQuery } from 'src/interface';

export default class CommentService {
  static async createComment(req: Request, res: Response) {
    const payload = req.body as IComment;
    const newComment = await commentModel.create(payload);
    return newComment;
  }

  static async getComment(req: Request, res: Response) {
    const { CommentId } = req.params;
    const Comment = await CommentRepository.getComment(CommentId);
    if (!Comment) throw new NotFoundError('Comment không tồn tại');
    return Comment;
  }

  static async getAllComments(req: Request, res: Response) {
    const { limit, page } = req.query as unknown as IQuery;
    const Comments = await CommentRepository.getAllComments(limit, page);
    return Comments;
  }

  static async updateComment(req: Request, res: Response) {
    const { CommentId } = req.params;
    const payload = req.body;
    const CommentUpdated = await CommentRepository.updateComment(
      CommentId,
      payload
    );
    if (!CommentUpdated)
      throw new NotFoundError('Không tìm thấy Comment để cập nhật');
    return CommentUpdated;
  }

  static async deleteComment(req: Request, res: Response) {
    const { CommentId } = req.params;

    const CommentDeleted = await CommentRepository.deleteComment(CommentId);
    if (!CommentDeleted)
      throw new NotFoundError('Không tìm thấy Comment để xóa');
    return CommentDeleted;
  }
}

// module.exports = CommentService;
