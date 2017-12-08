const mongoose = require('mongoose');
const Box = mongoose.model('Box');

exports.getBox = (req, res) => {
  res.json(
    [
      {
        name: 'First box'
      },
      {
        name: 'Second box'
      }
    ]
  );
};
