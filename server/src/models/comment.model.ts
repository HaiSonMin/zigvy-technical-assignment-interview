import { model, Schema } from 'mongoose';
import { MODALS_NAME } from '../constant';

const CommentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: MODALS_NAME.post,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model(MODALS_NAME.comment, CommentSchema);
