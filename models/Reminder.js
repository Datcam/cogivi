const mongoose = require('mongoose');

//statuses = sent, scheduled, name

const reminderSchema = new mongoose.Schema({
  boxid: mongoose.Schema.Types.ObjectId,
  scheduledTime: Date,
  status: String,
  name: String
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;