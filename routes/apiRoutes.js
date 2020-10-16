const db = require("../models");
const passport = require("../config/passport")


module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id

        });
    });

    app.post("/api/createUser", (req, res) => {
        db.User.create({
            _id: req.body._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.cody.password
        })
        .then (() => {
            res.jsonredirect(307, "/api/login");
        })
        .catch(err => {
            res.status(401).json(err);
            
        })
    })
}