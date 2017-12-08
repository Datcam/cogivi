const mongoose = require('mongoose');
const Contributor = mongoose.model('Contributor');

exports.getContribute = (req, res) => {
  res.json(
    [
      {
        name: 'First contribute'
      },
      {
        name: 'Second contribute'
      }
    ]
  );
};
