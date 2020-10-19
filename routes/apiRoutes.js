const db = require("../models");
const passport = require("../config/passport");
const express = require ('express');
const router = express.Router()


    router.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id

        });
        console.log(res)
    });

    router.get('/api/login', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })

    router.post("/api/create-user", (req, res) => {

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
        //  res.json.redirect(307, "/login");
        })
        .catch(err => {
            res.status(400).json(err);

        })
    })

    router.get("/api/user_data", (req, res) => {
        if (!req.user) {
          // The user is not logged in, send back an empty object
          res.json({});
        } else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          res.json({
            email: req.user.email,
            id: req.user.id
          });
        }
      });
    };

  

module.exports = router