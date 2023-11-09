import { model, Schema } from 'mongoose';
import { MODALS_NAME } from '../constant';

const PostSchema = new Schema(
  {
title: {
      type: String,
      required: [true, 'Vui lòng bổ sung tiêu đề bài post'],
      unique: [true, 'Tiêu đề đã tồn tại'],
    },
    body: {
      type: String,
      required: [true, 'Vui lòng nội dung tả cho bài post'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Vui lòng bổ sung id người viết bài'],
      ref: MODALS_NAME.user,
    },
  },
  {
    timestamps: true,
  }
);

PostSchema.index({
  post_title: 'text',
  post_description: 'text',
});

export default model(MODALS_NAME.post, PostSchema);
