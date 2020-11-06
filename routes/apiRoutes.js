const db = require("../models");
const passport = require("../config/passport");
const express = require('express');
const router = express.Router()

// ================ Passport authentication post route ========================

router.post("/api/login", passport.authenticate("local"), (req, res) => {
    // console.log(req)
    // console.log('bannana')
    res.json({
        email: req.user.email,
        id: req.user.id

    });

});

// =================== login get route =====================================

router.get('/api/login', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

// ========================= Create User post route =============================

router.post("/api/create-user", (req, res) => {

    console.log('hey');
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
        .then((user) => {
            res.json(user)
            //  res.json.redirect(307, "/login");
        })
        .catch(err => {
            res.status(400).json(err);

        })
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });


module.exports = router