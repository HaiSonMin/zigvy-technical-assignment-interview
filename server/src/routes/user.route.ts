import express from 'express';
import { API_V1_USER } from '../constant/path/v1';
import { UserController } from '../controllers';
const router = express.Router();

router.route(API_V1_USER.feature.getUser).get(UserController.getUser);
router.route(API_V1_USER.feature.updateUser).patch(UserController.updateUser);

export default router;
