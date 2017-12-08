const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.index = (req, res) => {
  res.json([
    {
      id: 1,
      username: 'Vasya'
    },
    {
      id: 2,
      username: 'Petya'
    }
  ])
};

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({
      username,
      password
    });

    res.json(user);
  } catch (err) {
    res.send(err, 500);
    console.error(err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || !user.comparePassword(password)) {
    res.status(401).send('Invalid username or password');
    return;
  }

  res.send('Ok');
};
