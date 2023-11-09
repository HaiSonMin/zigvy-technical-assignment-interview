import express from 'express';
const router = express.Router();
import { API_V1_COMMENT, API_V1_POST, API_V1_USER } from '../constant/path/v1';
import userRouter from './user.route';
import postRouter from './post.route';
import commentRouter from './comment.route';

router.use(API_V1_USER.root, userRouter);
router.use(API_V1_POST.root, postRouter);
router.use(API_V1_COMMENT.root, commentRouter);

export default router;
