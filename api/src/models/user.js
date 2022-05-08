import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, 'First name not provide'],
    },
    lastName: {
      type: String,
      required: [true, 'Surname not provide'],
    },
    userName: {
      type: String,
      unique: [true, 'username already existis in databse'],
      lowercase: true,
      trim: true,
      required: [true, 'username not provide'],
    },
    email: {
      type: String,
      unique: [true, 'email already exists in database!'],
      lowercase: true,
      trim: true,
      required: [true, 'email not provided'],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: '{VALUE} is not a valid email!',
      },
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
  }),
);

export default User;
