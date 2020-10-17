const db = require("../models");

const passport = require("../config/passport")


module.exports = function (app) {

    // app.post('/login',
    // passport.authenticate('local', { successRedirect: '/home',
    //                                  failureRedirect: '/login',
    //                                  failureFlash: true }));
    
    
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id

        });
    });

    app.post("/api/create-user", (req, res) => {

        console.log('heyy');
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
        .then ((user) => {
            res.json(user)
            // res.jsonredirect(307, "/api/login");
        })
        .catch(err => {
            res.status(400).json(err);

        })
    })

  

};