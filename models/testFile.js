const mongoose = require('mongoose');
const config = require('config');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

schema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    try {
      user.password = await bcrypt.hash(user.password, 10);
    } catch (err) {
      next(err);
    }

  }

  next();
});

schema.methods.comparePassword = function (password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('test', schema);
