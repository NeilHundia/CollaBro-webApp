const mongoose = require('mongoose');
const RecommendationSchema = new mongoose.Schema({
  suggestedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  receives: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  generatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Recommendation', RecommendationSchema);