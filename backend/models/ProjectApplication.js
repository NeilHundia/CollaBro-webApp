const mongoose = require('mongoose');
const ProjectApplicationSchema = new mongoose.Schema({
  status: String,
  skills: [String],
  createdAt: { type: Date, default: Date.now },
  forProject: { type: mongoose.Schema.Types.ObjectId, ref: 'CollaborationProject' },
  appliedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('ProjectApplication', ProjectApplicationSchema);