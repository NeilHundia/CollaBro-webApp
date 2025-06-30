const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  media: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  relatedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'CollaborationProject' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});
module.exports = mongoose.model('Post', PostSchema);