import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { MODALS_NAME } from '../constant';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng bổ sung tên người dùng'],
      minlength: 6,
      maxlength: 50,
    },
    username: {
      type: String,
      required: [true, 'Vui lòng bổ sung tên người dùng'],
      minlength: 6,
      maxlength: 50,
    },
    email: {
      type: String,
      match: [
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
        ,
        'Email không đúng định dạng',
      ],
      unique: [true, 'Email đã được đăng kí trước đó'],
      required: [true, 'Vui lòng bổ sung email'],
    },
    phone: {
      type: String,
      match: [
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        'Số điện thoại không đúng định dạng',
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default model(MODALS_NAME.user, UserSchema);
