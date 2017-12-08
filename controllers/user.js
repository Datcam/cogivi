const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = 'tasmanianDevil';

exports.signUp = (req, res) => {
  const user = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { birthday } = req.body;
  const { phone } = req.body;

  const profile = {
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.sex,
    birthday: birthday,
    phone: phone
  };

  User.create({
    email,
    password,
    profile
  })
    .then(function (){
        res.json('Ok');
    })
    .catch(function (err){
        console.log(err);
    })
};

exports.login = async(req, res) => {
  const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(user);

    if (!user || !user.comparePassword(password)) {
        res.status(401).send('Invalid username or password');
        return;
    }

    let payload = {id: user.id};
    let token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.setHeader('Authorization', token);
    res.json({message: "ok", user: user, token: token});
};