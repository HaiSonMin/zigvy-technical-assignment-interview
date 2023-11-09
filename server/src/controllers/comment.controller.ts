import { Request, Response } from 'express';
import { CommentService } from '../services';
import { CREATED, OK } from '../core/success.response';

export default class CommentController {
  static async createComment(req: Request, res: Response) {
    new CREATED({
      message: 'Create Comment successfully',
      metadata: await CommentService.createComment(req, res),
    }).send(res);
  }
  static async getComment(req: Request, res: Response) {
    new OK({
      message: 'Get Comment successfully',
      metadata: await CommentService.getComment(req, res),
    }).send(res);
  }
  static async getAllComments(req: Request, res: Response) {
    new OK({
      message: 'Get all Comment successfully',
      metadata: await CommentService.getAllComments(req, res),
    }).send(res);
  }
  static async updateComment(req: Request, res: Response) {
    new OK({
      message: 'Update Comment successfully',
      metadata: await CommentService.updateComment(req, res),
    }).send(res);
  }
  static async deleteComment(req: Request, res: Response) {
    new OK({
      message: 'Delete Comment successfully',
      metadata: await CommentService.deleteComment(req, res),
    }).send(res);
  }
}

// module.exports = CommentController;
