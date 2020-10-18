const express = require("express");
const path = require("path");
const app = express();
const passport = require("./config/passport");
const mongoose = require('mongoose')
const router = require("./routes")
const session = require('express-session')


const morgan = require('morgan');
const models = require('./models');
// const router = require("./routes/apiRoutes");

// Define middleware here
// app.use(session({secret: 'surfs-up'}))
// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   next()
// });
// app.post('/api/create-user', (req, res) => {
//   console.log('user signup');
//   req.session.firstName = req.body.firstName;
//   res.end()
// })

const PORT = process.env.PORT || 3000;
// Send every other request to the React app
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/poseura',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport 
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser


// Define API routes here

app.use(router)
// require("./routes/apiRoutes")(app);


// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
