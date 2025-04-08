const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
    trim: true,
  },
  profilePic: {
    type: String, // URL to profile picture
    default: 'https://example.com/default-profile.png',
  },
  bio: {
    type: String,
    maxLength: 150,
  },
  skills: [String],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model('users',userSchema);
module.exports = UserModel;
