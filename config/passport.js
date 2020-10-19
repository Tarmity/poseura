const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require('../models');

passport.use(
    new LocalStrategy(

        {
            usernameField: "email"
        },
        (email, password, done) => {
            console.log('inside passport', email, password)
            db.User.findOne({
                email: email
            }).then(dbUser => {
                console.log(dbUser.checkPassword)
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect email."
                    });
                }

                else if (!dbUser.checkPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }

                return done(null, dbUser);
            });
        }
    )
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;