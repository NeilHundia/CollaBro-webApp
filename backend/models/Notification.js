const mongoose = require('mongoose');
const NotificationSchema = new mongoose.Schema({
  message: String,
  type: String,
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Notification', NotificationSchema);