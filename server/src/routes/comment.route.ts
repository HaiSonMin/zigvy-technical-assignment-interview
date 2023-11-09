import express from 'express';
import { API_V1_COMMENT } from '../constant/path/v1';
import { CommentController } from '../controllers';
const router = express.Router();

router
  .route(API_V1_COMMENT.feature.createComment)
  .post(CommentController.createComment);
router
  .route(`${API_V1_COMMENT.feature.getComment}/:commentId`)
  .get(CommentController.getComment);
router
  .route(API_V1_COMMENT.feature.getAllComments)
  .get(CommentController.getAllComments);

router
  .route(`${API_V1_COMMENT.feature.updateComment}/:commentId`)
  .patch(CommentController.updateComment);
router
  .route(`${API_V1_COMMENT.feature.deleteComment}/:commentId`)
  .delete(CommentController.deleteComment);
export default router;
