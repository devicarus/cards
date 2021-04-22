const passport = require('passport')
const LocalStrategy = require('passport-local')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const bcrypt = require('bcrypt')

const User = require('./models/User')

module.exports = (app) => {
    app.use(passport.initialize())

    passport.use(
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        }, (jwt_payload, done) => {
            User.findById(jwt_payload._id)
                .then(user => {
                    if (user) return done(null, user)
                    return done(null, false)
                })
                .catch(err => done(err))
        })
    );

    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email, password, done) => {
            User.findOne({ email })
                .then(user => {
                    if (!user) return done(null, false);
                    if (!bcrypt.compareSync(password, user.password)) return done(null, false)
                    return done(null, user)
                })
                .catch(err => done(err))
        })
    )
}