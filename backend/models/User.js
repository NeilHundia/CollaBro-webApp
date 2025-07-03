const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
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
    trim: true,
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
  profilePicture: {
    type: String, // URL to profile picture
    default: 'https://example.com/default-profile.png',
  },
  bio: {
    type: String,
    maxLength: 150,
    trim: true,
  },
  skills: [String], // Merged with 'domains' from second schema
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  category: {
    type: String,
    enum: ['Student', 'Fresher', 'Working Professional'],
  },
  currentCity: {
    type: String,
    trim: true,
  },
  university: {
    type: String,
    trim: true,
  },
  stream: {
    type: String,
    trim: true,
  },
  resume: {
    type: String, // URL or path to resume
    trim: true,
  },
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;