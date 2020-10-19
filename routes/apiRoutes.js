const db = require("../models");
const passport = require("../config/passport");
const express =require ('express');
const router = express.Router()


 
  
    router.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.body.email,
            password: req.body.password,
            // id: req.user.id

        });
    });

    router.get('/api/login', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.body)
        if (req.body) {
            res.json({ user: req.body })
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
            // res.jsonredirect(307, "/api/login");
        })
        .catch(err => {
            res.status(400).json(err);

        })
    })

  

module.exports = router