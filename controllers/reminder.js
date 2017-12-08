const mongoose = require('mongoose');
const reminder = mongoose.model('Reminder');

exports.getReminder = (req, res) => {
  res.json([
    {
      name: 'First reminder'
    },
    {
      name: 'Second reminder'
    }
  ]);
};
