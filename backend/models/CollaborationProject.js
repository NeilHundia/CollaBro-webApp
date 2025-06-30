const mongoose = require('mongoose');
const CollaborationProjectSchema = new mongoose.Schema({
  projectTitle: String,
  description: String,
  domain: String,
  domainTags: [String],
  teamSize: Number,
  timeline: String,
  skillSet: [String],
  projectType: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  appliedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('CollaborationProject', CollaborationProjectSchema);