const passport = require('passport');
const LocalStrategy = require('passport-local')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcrypt')

const User = require('./models/User')

module.exports = (app) => {
    app.use(passport.initialize())

    passport.use(
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "secret"
        }, (jwt_payload, done) => {
            console.log(jwt_payload)
            User.findById(jwt_payload._id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );

    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email, password, done) => {
            User.findOne({ email }, function (err, user) {
                if (err) return done(err);
                if (!user) return done(null, false);
                if (!bcrypt.compareSync(password, user.password)) return done(null, false);
                return done(null, user);
            });
        })
    )
}