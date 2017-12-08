const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local');
const User = require('./models/User');

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = '2430B518CD5AC1EC1F07B42AB780C3CA017ED6027981F44A4AA1D8BA95DD20DF';

mongoose.connect(config.get('database'), { useMongoClient: true });
mongoose.Promise = require('bluebird');

require('./models/testFile');
require('./models/Box');
require('./models/Contributor');
require('./models/Reminder');
require('./models/User');

const user = require('./controllers/user');
const box = require('./controllers/box');
const contribute = require('./controllers/contributor');
const reminder = require('./controllers/reminder');

const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    'exposedHeaders': ['Authorization']
}));

passport.use(new LocalStrategy(
    function (email, password, done){
        User.findOne({email: email}, function (err, user){
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.comparePassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

app.post('/signUp', user.signUp);
app.post('/login', user.login);
app.get('/box', box.getBox);
app.get('/contribute', contribute.getContribute);
app.get('/reminder', reminder.getReminder);

const port = config.get('port');

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
