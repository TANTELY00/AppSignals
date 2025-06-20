import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  description: String
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
